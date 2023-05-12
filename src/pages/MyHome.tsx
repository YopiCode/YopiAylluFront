import { useEffect, useState } from 'react'
import JSZip from 'jszip';
import useModalActive from '../hooks/useModalActive'
import { AddButton, InputsForm, Modal } from '../components'
import Form from '../components/forms/Form'
import { getAll, registrarPiso } from '../services/CroquisService'
import { useFamilyContext } from '../context/FamilyProvider';
import TableDefault from '../components/table/TableDefault';
import { CroquisModel } from '../models';
import { EmptyImagenes, ImagenesResponse } from '../models/ResponseModels';

const MyHome = () => {
  const [piso, setPiso] = useState<number>(0)
  const [mapa, setMapa] = useState<File>()
  const [croquisAll, setCroquisAll] = useState<Array<ImagenesResponse>>([EmptyImagenes])
  const [img, setImge] = useState<Array<string>>([])
  const familia = useFamilyContext();
  const { activate, handleActiveModal } = useModalActive()

  useEffect(() => {
    getAllCroquis()
  }, [])

  const getAllCroquis = async () => {
    await getAll(familia.codigofamiliar).then(async (blob) => {
      const zip = await JSZip.loadAsync(blob);

      const croquisList: Array<ImagenesResponse> = [];

      for (const [filename, file] of Object.entries(zip.files)) {
        if (file.dir) continue;
        const url = await getFileUrl(file);
        croquisList.push({ filename, url });
      }

      setCroquisAll(croquisList);
    });
  };

  const getFileUrl = async (file: JSZip.JSZipObject) => {
    const blob = await file.async('blob');
    return URL.createObjectURL(blob);
  }

  const addPiso = async () => {
    if (!mapa || !(mapa instanceof File)) {
      return
    }
    const blob = new Blob([mapa], { type: mapa.type });
    const mapaBytes = await blob.arrayBuffer();
    const croquis: CroquisModel = {
      piso: piso,
      mapa: Array.from(new Uint8Array(mapaBytes))
    }
    registrarPiso(familia.codigofamiliar, croquis)
      .then(async (data) => {
        handleActiveModal()

        const zip = await JSZip.loadAsync(data);


        for (const [filename, file] of Object.entries(zip.files)) {
          if (file.dir) continue;
          const url = await getFileUrl(file);
          setCroquisAll(croquisAll.concat({ filename, url }));
        }


      }).catch(error => {
        alert(error.response)
      })

    croquisAll.forEach(item => {
      console.log(item)
    })
  }


  return (
    <div className='p-3 '>
      <h1 className='text-center text-3xl font-medium my-4'>Mi Hogar</h1>
      <TableDefault
        titulos={["Codigo Familiar", "Nombre Familiar", "Cantidad", "Lider"]}
        datos={[familia.codigofamiliar, familia.nombrefamilia, familia.cantidad, familia.lider]}
      />

      <AddButton children="Piso" onClick={handleActiveModal} />
      <Modal visible={activate} onClose={handleActiveModal} title={''} >
        <Form onSubmit={addPiso} title={'Nuevo Piso'}>
          <InputsForm placeholder='Ingrese Piso' inputType={'number'} object={piso} setObject={setPiso} />
          <InputsForm inputType={'file'} object={mapa} setObject={setMapa} />
        </Form>
      </Modal>
      {croquisAll.map((croquis) => (
        <img className='w-full' key={croquis.filename} src={croquis.url} alt={croquis.filename} />
      ))}
    </div>
  )
}

export default MyHome