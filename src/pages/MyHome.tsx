import React, { useEffect, useState } from 'react'
import JSZip from 'jszip';
import { CroquisModel, CroquisModelResponse, EmptyCroquis, EmptyMyHome, MyHomeModel } from '../models'
import { InfoFamilia } from '../services/FamiliaService'
import useModalActive from '../hooks/useModalActive'
import { AddButton, InputsForm, Modal } from '../components'
import Form from '../components/forms/Form'
import { getAll, registrarPiso } from '../services/CroquisService'
import { useFamilyContext } from '../context/FamilyProvider';
import TableDefault from '../components/table/TableDefault';

const MyHome = () => {
  const [myhome, setMyHome] = useState<MyHomeModel>(EmptyMyHome)
  const [piso, setPiso] = useState<number>(0)
  const [mapa, setMapa] = useState<File>()
  const [croquis, setCroquis] = useState([])
  const [img, setImge] = useState<Array<string>>([])
  const familia = useFamilyContext();
  const { activate, handleActiveModal } = useModalActive()

  useEffect(() => {
    getInfoFamilia()
    getAllCroquis()
  }, [])

  const getInfoFamilia = async () => {
    await InfoFamilia(familia.codigofamiliar).then(data => {
      setMyHome(data)
    })
  }


  const getAllCroquis = async () => {
    await getAll(familia.codigofamiliar).then(async (blob) => {
      const zip = await JSZip.loadAsync(blob);

      const croquisList = [];

      for (const [filename, file] of Object.entries(zip.files)) {
        if (file.dir) continue; // omitir directorios
        const url = await getFileUrl(file);
        croquisList.push({ filename, url });
      }

      setCroquis(croquisList);
    });
  };

  const getFileUrl = async (file) => {
    const blob = await file.async('blob');
    return URL.createObjectURL(blob);
  }

  const addPiso = async () => {
    if (!mapa || !(mapa instanceof File)) {
      return
    }
    const blob = new Blob([mapa], { type: mapa.type });
    const mapaBytes = await blob.arrayBuffer();
    const croquis: CroquisModelResponse = {
      id: 0,
      piso: piso,
      mapa: Array.from(new Uint8Array(mapaBytes))
    }
    console.log(croquis)
    registrarPiso(familia.codigofamiliar, croquis)
      .then((data) => {
        handleActiveModal()
      }).catch(error => {
        alert(error.response.data.message)
      })
  }


  return (
    <div className='p-3 '>
      <h1 className='text-center text-3xl font-medium my-4'>Mi Hogar</h1>
      <TableDefault
        titulos={["Codigo Familiar", "Nombre Familiar", "Cantidad", "Lider"]}
        datos={[myhome.codigofamiliar, myhome.nombrefamilia, myhome.cantidad, myhome.lider]}
      />

      <AddButton children="Piso" onClick={handleActiveModal} />
      <Modal visible={activate} onClose={handleActiveModal} title={''} >
        <Form onSubmit={addPiso} title={'Nuevo Piso'}>
          <InputsForm placeholder='Ingrese Piso' inputType={'number'} object={piso} setObject={setPiso} />
          <InputsForm inputType={'file'} object={mapa} setObject={setMapa} />
        </Form>
      </Modal>
      {croquis.map((croquis, id) => (
        <img className='w-full' key={croquis.filename} src={croquis.url} alt={croquis.filename} />
      ))}
    </div>
  )
}

export default MyHome