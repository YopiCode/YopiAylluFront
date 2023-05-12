import React, { useEffect, useState } from 'react'
import { EmptyPasos, EmptyPlanes, PasosModel, PlanesModel } from '../models'
import { AddButton, ImgButton, InputsForm, Modal, Title } from '../components'
import useModalActive from '../hooks/useModalActive'
import Form from '../components/forms/Form'
import { addPasos, addPlanes, deletePasos, deletePlanes, queryAllPlanes } from '../services/PlanesService'
import { useFamilyContext } from '../context/FamilyProvider'
import { ImgExit, ImgMore } from '../assets'
import { EmptyPasosResponse, EmptyPlanesResponse, PasosResponse, PlanesResponse } from '../models/ResponseModels'

const Plan = () => {
  const [planes, setPlanes] = useState<Array<PlanesResponse>>([EmptyPlanesResponse])
  const [nombre, setNombre] = useState("")
  const [idplan, setIdPlan] = useState(0)
  const [openPasos, setOpenPasos] = useState(false)
  const { activate, handleActiveModal } = useModalActive()
  const { activate: activate1, handleActiveModal: handleActiveModal1 } = useModalActive()
  const familia = useFamilyContext()

  const [pasos, setPasos] = useState<Array<PasosResponse>>([EmptyPasosResponse])
  const [detalle, setDetalle] = useState("")


  const addPaso = async () => {
    const paso: PasosModel= {
      detalle: detalle
    }

    await addPasos(idplan, paso)
      .then(data => {
        setPasos(pasos.concat(data))
      })
  }

  const eliminarPaso = async (id: number) => {
    await deletePasos(id)
      .then(data => {
        setPasos(pasos.filter(item => item.id != data))
      })
  }

  useEffect(() => {
    getPlanes()
  }, [])

  const getPlanes = async () => {
    await queryAllPlanes(familia.codigofamiliar)
      .then(data => {
        setPlanes(data)
        setPasos(data.flatMap(item => item.pasos))
      })
  }

  const addPlan = async () => {
    const plan: PlanesModel = {
      nombre: nombre
    }
    await addPlanes(familia.codigofamiliar, plan)
      .then(data => {
        setPlanes(planes.concat(data))
      })
  }

  const eliminar = async (id: number) => {
    await deletePlanes(id)
      .then(data => {
        setPlanes(planes.filter(item => item.id != data))
      })
  }

  const handleIdPlan = (id: number) => {
    setIdPlan(id)
    handleActiveModal1()
  }

  return (
    <div>
      <Title children='Planes Familiares' />
      {planes.map((item, id) => {
        return (
          <div key={id} className='p-2 m-3 rounded-3xl border border-slate-600'>
            <div className={`flex justify-between items-center px-4 py-2 `}>
              <h1 onClick={() => setOpenPasos(!openPasos)}>{item.nombre}</h1>
              <div className='flex gap-5'>
                <ImgButton content={ImgMore} className='w-7 p-2 bg-yellow-300' onClick={() => handleIdPlan(item.id)} />
                <ImgButton content={ImgExit} className='w-7' onClick={() => eliminar(item.id)} />
              </div>
            </div>
            {openPasos ? (
              <div className='px-4 py-1 border-t-2 border-slate-500  '>
                {pasos.map((item, id) => {
                  return (
                    <div key={id} className='flex justify-between items-center mt-2'>
                      <div className=''>Paso {item.paso}</div>
                      <p className='w-full max-w-lg my-auto text-lg font-normal '>{item.detalle}</p>
                      <div> <ImgButton className='w-7' content={ImgExit} /> </div>
                    </div>
                  )
                })}
              </div>
            ) : ("")}
          </div>
        )
      })}

      <Modal onClose={handleActiveModal1} visible={activate1} title={''}>
        <Form onSubmit={addPaso} title='Nuevo Paso'>
          <p>Paso Nº {pasos.length + 1}</p>
          <InputsForm inputType='text' placeholder='Detalle' object={detalle} setObject={setDetalle} />
        </Form>
      </Modal>

      <AddButton children='Plan' onClick={handleActiveModal} />

      <Modal onClose={handleActiveModal} visible={activate} title=''>
        <Form title='Nuevo Plan' onSubmit={addPlan}>
          <InputsForm inputType='text' placeholder='Nombre Plan' object={nombre} setObject={setNombre} />
        </Form>
      </Modal>
    </div >
  )
}

export default Plan