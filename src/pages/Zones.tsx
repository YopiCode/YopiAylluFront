import { useEffect, useState } from "react"
import { EmptyZone, ZonesModel } from "../models"
import { addZones, deleteZonas, queryAllZones } from "../services/ZonesService"
import { useFamilyContext } from "../context/FamilyProvider"
import { AddButton, InputsForm, Modal, Table, TdDelete, TdSingle, TextAreaForm, Thead } from "../components"
import useModalActive from "../hooks/useModalActive"
import Form from "../components/forms/Form"
import { EmptyZonesResponse, ZonesResponse } from "../models/ResponseModels"


const Zones = () => {
    const [zones, setZones] = useState<Array<ZonesResponse>>([EmptyZonesResponse])
    const [nombre, setNombre] = useState("")
    const [detalle, setDetalle] = useState("")
    const [tipo, setTipo] = useState("")
    const familia = useFamilyContext();
    const { activate, handleActiveModal } = useModalActive()

    useEffect(() => {
        getZones()
    }, [])

    const eliminar = async (id: number) => {
        await deleteZonas(id)
            .then(data => {
                setZones(zones.filter(item => item.id != data))
            })
    }

    const addZonas = async () => {
        const zone: ZonesModel = {
            nombre: nombre,
            detalle: detalle,
            tipo: tipo
        }
        await addZones(familia.codigofamiliar, zone)
            .then(data => {
                setZones(zones.concat(data))
                handleActiveModal()
            }).catch(error => {
                alert(error.response.data.message)
            })
    }

    const getZones = async () => {
        await queryAllZones(familia.codigofamiliar).then(data => {
            setZones(data)
        })
    }

    return (
        <div className="p-4">
            <h1 className="my-6 text-3xl font-medium text-center">Zonas</h1>

            <Table show={zones.length > 0} bg={"table-yellow"}>
                <Thead thead={["Nombre", "Detalle", "Tipo", ""]} />
                <tbody>
                    {zones.map((item) => {
                        return (
                            <tr key={item.id}>
                                <TdSingle children={item.nombre} />
                                <TdSingle children={item.detalle} />
                                <TdSingle children={item.tipo} />
                                <TdDelete onDelete={() => eliminar(item.id)} />
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            <AddButton children="Zonas" onClick={handleActiveModal} />

            <Modal onClose={handleActiveModal} visible={activate} title={""}>
                <Form title={"Nueva Zona"} onSubmit={addZonas}>
                    <InputsForm placeholder="Nombre" inputType="text" object={nombre} setObject={setNombre} />
                    <TextAreaForm placeholder="Detalle" object={detalle} setObject={setDetalle} />
                    <InputsForm placeholder="Tipo" inputType="text" object={tipo} setObject={setTipo} />
                </Form>

            </Modal>
        </div>
    )
}

export default Zones