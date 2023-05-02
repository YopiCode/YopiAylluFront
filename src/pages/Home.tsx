import { useEffect, useState } from "react"
import { homeFamilia } from "../services/FamiliaService"
import { EmptyHome, HomeModel } from "../models"
import { ImgMore } from "../assets"



const Home = () => {
  const [home, setHome] = useState<HomeModel>(EmptyHome)

  useEffect(() => {
    getHome()
  }, [])

  const getHome = async () => {
    await homeFamilia().then((data) => {
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
        <div>
          <button>
            <img src={ImgMore} />
          </button>
          <h2>
            De "Click" para agregar un familiar
          </h2>
        </div>
      ) : (
        <div className="">
          <h2 className="text-4xl font-bold pb-6">Integrantes</h2>
          <table className="w-full text-center bg-orange-300 rounded-3xl border-separate border-spacing-x-10">
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
          </table>
        </div>
      )}
    </div>
  )
}

export default Home