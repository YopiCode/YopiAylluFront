import { Return } from "../assets"
import { ImgButton, InputsForm, PrimaryButton, TextAreaForm } from "../components"
import { routes } from '../routes';
import { FamiliaModel } from "../models";
import { registrarFamilia } from "../services/FamiliaService";
import Title from "../components/Titles/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVoidFamilyContext } from "../context/FamilyProvider";


const Register = () => {
  const [codigo, setCodigo] = useState<number>(0);
  const [nombre, setNombre] = useState<string>("");
  const [direccion, setDireccion] = useState<string>("");
  const [contrasena, setContrasena] = useState<number>(0);
  const [confirm, setConfirm] = useState<number>(0);


  const navigate = useNavigate();
  const setFamilia = useVoidFamilyContext();

  const addFamily = async () => {
    if (contrasena !== confirm) {
      alert("Las contraseñas no son iguales :v")
      return
    }
    const familia: FamiliaModel = {
      codigofamiliar: codigo,
      contrasena: contrasena,
      direccion: direccion,
      nombrefamilia: nombre
    }

    console.log(familia)
    await registrarFamilia(familia)
      .then((data) => {
        setFamilia(data)
        navigate(routes.home)
      })
      .catch(error => {
        alert(error.response.data.message)
      })
    
  }

  return (
    <div className="m-2 h-full sm:w-full md:w-3/5 lg:w-2/5 md:mx-auto">
      <ImgButton content={Return} onClick={() => navigate(routes.welcome)} />
      <div className="h-3/4 bg-yellow-500 px-10 py-4 text-center mt-10 rounded-2xl">
        <Title children="Registrar" />
        <div className="px-5 flex flex-wrap gap-7">
          <InputsForm placeholder="Codigo Familiar" inputType="number" object={codigo} setObject={setCodigo} />
          <InputsForm placeholder="Nombre Familia" inputType="text" object={nombre} setObject={setNombre} />
          <TextAreaForm placeholder="Dirección" object={direccion} setObject={setDireccion} />
          <InputsForm placeholder="Contraseña" inputType="password" object={contrasena} setObject={setContrasena} />
          <InputsForm placeholder="Confirmar Contraeña" inputType="password" object={confirm} setObject={setConfirm} />
        </div>
        <div className="mt-10">
          <PrimaryButton children="Registrar" content="1" onClick={addFamily} bg={"btn-yellow"} />
          <PrimaryButton children="Ingresar" content="2" onClick={() => navigate(routes.login)} bg={""} />
        </div>
      </div>
    </div>
  )
}

export default Register