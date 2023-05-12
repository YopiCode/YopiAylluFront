import { useEffect, useState } from 'react'
import { AddButton, CheckBoxForm, InputsForm, Modal, Table, TdDelete, TdSingle, Title } from '../components'
import { ProductosModel } from '../models'
import { addProductos, deleteProductos, queryAllProductos, updateDisponible } from '../services/BagService'
import { useFamilyContext } from '../context/FamilyProvider'
import useModalActive from '../hooks/useModalActive'
import Form from '../components/forms/Form'
import { ProductosResponse } from '../models/ResponseModels'

const Bag = () => {
  const [productos, setProducto] = useState<Array<ProductosResponse>>([])
  const [nombre, setNombre] = useState("")
  const [caducable, setCaducable] = useState(false)
  const [fecha, setFecha] = useState(new Date(""))
  const { activate, handleActiveModal } = useModalActive()
  const familia = useFamilyContext()

  useEffect(() => {
    getAllProducts()
  }, [])

  const getAllProducts = async () => {
    await queryAllProductos(familia.codigofamiliar)
      .then(data => {
        setProducto(data)
      })
  }

  const isDisponible = async (id: number) => {
    await updateDisponible(id).then(() => {
      setProducto(productos.filter((item, id2)=>{
        if(id2 === id) item.disponible = !item.disponible
      }))
    })
  }

  const addProducto = async () => {
    const producto: ProductosModel = {
      nombre: nombre,
      fecha_caducidad: fecha,
      caducable: caducable
    }
    await addProductos(familia.codigofamiliar, producto)
      .then(data => {
        handleActiveModal()
        setProducto(productos.concat(data))
        setCaducable(false)
        setFecha(new Date(""))
      })
  }

  const eliminar = async (id: number) => {
    await deleteProductos(id)
      .then(data => {
        setProducto(productos.filter(item => item.id != data))
      })
  }

  return (
    <div>
      <Title children="Mi Mochila" />
      <Table show={productos.length > 0} bg={'table-cyan'}>
        <tbody>
          {productos.map((item, id) => {
            return (
              <tr key={id}>
                <TdSingle children={item.nombre} />
                <TdSingle children={item.fecha_caducidad ? String(item.fecha_caducidad) : "-"} />
                <TdSingle>
                  <input type='checkbox' checked={item.disponible} onChange={() => isDisponible(item.id)} />
                </TdSingle>
                <TdDelete onDelete={() => eliminar(item.id)} />
              </tr>
            )
          })}
        </tbody>
      </Table>
      <AddButton children="Producto" onClick={handleActiveModal} />

      <Modal onClose={handleActiveModal} visible={activate} title={''}>
        <Form onSubmit={addProducto} title={'Nuevo Producto'}>
          <InputsForm placeholder='Nombre de Producto' object={nombre} setObject={setNombre} inputType="text" />
          <CheckBoxForm children="caducable" object={caducable} setObject={setCaducable} />
          <InputsForm inputType='date' object={fecha} setObject={setFecha} disable={!caducable} />
        </Form>
      </Modal>
    </div>
  )
}

export default Bag