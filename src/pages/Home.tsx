import { useEffect, useState } from "react"
import { homeFamilia } from "../services/FamiliaService"
import { EmptyHome, HomeModel } from "../models"
import { AddButton, Table } from "../components"
import { useNavigate } from "react-router-dom"
import { routes } from "../routes"
import { useFamilyContext } from "../context/FamilyProvider"


const Home = () => {
  const [home, setHome] = useState<HomeModel>(EmptyHome)
  const navigate = useNavigate();
  const familia = useFamilyContext();

  useEffect(() => {
    getHome()
  }, [])
  const getHome = async () => {
    await homeFamilia(familia.codigofamiliar).then((data) => {
      setHome(data)
    }).catch(e => console.log(e))
  }

  return (
    <div className="p-3">
      <div className="bg-yellow-400 text-gray-700 font-bold p-3 rounded-3xl mb-6">
        <h1 className="text-2xl mb-4">Código Familiar: </h1>
        <p className="text-center text-xl">{home.codigofamiliar}</p>
      </div>
      <div className="bg-yellow-400 text-gray-700 font-bold p-3 rounded-3xl mb-6">
        <h1 className="text-2xl mb-4">Nombre Familiar: </h1>
        <p className="text-center text-xl">{home.nombrefamilia}</p>
      </div>
      {home.integrantes.length == 0 ? (
        <AddButton children="Familiar" onClick={() => navigate(routes.family)} />
      ) : (
        <div className="">
          <h2 className="text-4xl font-bold pb-6">Integrantes</h2>
          <Table show={home.integrantes.length != 0} bg="table-orange">
            <tbody>
              {home.integrantes.map((item, i) => {
                return (
                  <tr key={i} className="text-2xl">
                    <td className="text-red-600 font-semibold p-2">{item.roles}</td>
                    <td className="text-black italic p-2">{item.nombres}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  )
}

export default Home