import { useEffect, useState } from "react"
import {  IntegrantesModel } from "../models"
import { deleteIntegrante, getIntegrantesByCodigo, registerIntegrantes } from "../services/IntegrantesService"
import { AddButton, InputsForm, Modal, Table, TdDelete, TdSingle, Thead, Title } from "../components"
import { useFamilyContext } from "../context/FamilyProvider"
import useModalActive from "../hooks/useModalActive"
import Form from "../components/forms/Form"
import CheckBoxForms from "../components/forms/CheckBoxForms"
import { IntegranteResponse } from "../models/ResponseModels"



const Family = () => {
  const [integrantes, setIntegrantes] = useState<Array<IntegranteResponse>>([])
  const [nombre, setNombre] = useState<string>("")
  const [apellidos, setApellidos] = useState<string>("")
  const [rol, setRol] = useState<string>("")
  const [dni, setDni] = useState<number>(0)
  const [telefono, setTelefono] = useState<number>(0)
  const [mascota, setMascota] = useState<boolean>(false)
  const [discapacitado, setDiscapacitado] = useState<boolean>(false)
  const { activate, handleActiveModal } = useModalActive()
  const familia = useFamilyContext();

  useEffect(() => {
    getIntegrantes()
  }, [])

  const getIntegrantes = async () => {
    await getIntegrantesByCodigo(familia.codigofamiliar).then(data => {
      setIntegrantes(data)
    })
  }

  const eliminar = async (id: number) => {
    await deleteIntegrante(id)
      .then(data => {
        setIntegrantes(integrantes.filter(item => item.id != data))
      })
  }

  const addIntegrante = async () => {
    const integrante: IntegrantesModel = {
      nombres: nombre,
      apellidos: apellidos,
      dni: dni,
      telefono: telefono,
      discapacitado: discapacitado,
      mascota: mascota,
      roles: rol
    }
    await registerIntegrantes(familia.codigofamiliar,integrante).then(data => {
      setIntegrantes(integrantes.concat(data))
      handleActiveModal()
    })
      .catch(error => {
        alert(error.response.data.message)
      })
  }

  return (
    <div className="px-2">
      <Title children="Familia" />
      <Table show={integrantes.length > 0} bg={"table-cyan"}>
        <Thead thead={["Nombre", "Telefono", "Discapacitado", " "]} />
        <tbody>
          {integrantes.map(item => (
            <tr key={item.id}>
              <TdSingle children={item.nombres} />
              <TdSingle children={item.telefono} />
              <TdSingle children={item.discapacitado} />
              <TdDelete onDelete={() => eliminar(item.id)} />
            </tr>
          ))}
        </tbody>
      </Table>

      <AddButton children="Familiar" onClick={handleActiveModal} />

      <Modal visible={activate} title="" onClose={handleActiveModal} >
        <Form title="Nuevo Integrante" onSubmit={addIntegrante} >
          <InputsForm placeholder="Nombre" inputType="text" object={nombre} setObject={setNombre} />
          <InputsForm placeholder="Apellidos" inputType="text" object={apellidos} setObject={setApellidos} />
          <InputsForm placeholder="Dni" inputType="number" object={dni} setObject={setDni} />
          <InputsForm placeholder="Rol" inputType="text" object={rol} setObject={setRol} />
          <InputsForm placeholder="Telefono" inputType="number" object={telefono} setObject={setTelefono} />
          <CheckBoxForms children="mascota" object={mascota} setObject={setMascota} />
          <CheckBoxForms children="discapacitado" object={discapacitado} setObject={setDiscapacitado} />
        </Form>
      </Modal>

    </div>
  )
}

export default Family