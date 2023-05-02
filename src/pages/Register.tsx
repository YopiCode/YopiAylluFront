import { Return } from "../assets"
import { ImgButton, InputsForm, PrimaryButton, TextAreaForm } from "../components"
import { useNavigate } from "react-router-dom";
import { routes } from '../routes';
import { EmptyFamilia, FamiliaModel } from "../models";
import useSend from "../hooks/useSendInput";
import { registrarFamilia } from "../services/FamiliaService";


const Register = () => {
  const navigate = useNavigate()
  const { model, handleChange } = useSend<FamiliaModel>(EmptyFamilia);

  const addFamily = async () => {
    if(model.contrasena !== model.recontrasena){
      alert("Las contraseñas no son iguales :v")
      return
    }
    await registrarFamilia(model)
    .then((data)=>{
        if(!data.error){
          navigate(routes.home)
        }
    })
  }

  return (
    <div className="m-2 h-full">
      <ImgButton content={Return} onClick={() => navigate(routes.welcome)} />
      <div className="h-3/4 bg-yellow-500 px-10 py-4 text-center mt-10 rounded-2xl">
        <h2 className="text-center text-4xl m-5 font-medium">Registrar</h2>
        <div className="px-5 flex flex-wrap gap-7">
          <InputsForm placeholder="Codigo Familiar" itemType="text" onChange={handleChange} content="codigofamiliar" />
          <InputsForm placeholder="Nombre Familia" itemType="text" onChange={handleChange} content="nombrefamilia" />
          <TextAreaForm placeholder="Dirección" onChange={handleChange} content="direccion" />
          <InputsForm placeholder="Contraseña" itemType="password" onChange={handleChange} content="contrasena" />
          <InputsForm placeholder="Confirmar Contraeña" itemType="password" onChange={handleChange} content="recontrasena" />
        </div>
        <div className="mt-10">
          <PrimaryButton children="Registrar" content="1" onClick={addFamily} />
          <PrimaryButton children="Ingresar" content="2" onClick={() => navigate(routes.login)} />
        </div>
      </div>
    </div>
  )
}

export default Register