import { Icon, Return } from "../assets"
import { ImgButton, InputsForm, PrimaryButton } from "../components"
import { routes } from '../routes';
import { EmptyFamilia, FamiliaModel } from "../models";
import { loginFamilia } from "../services/FamiliaService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVoidFamilyContext } from "../context/FamilyProvider";

const Login = () => {
    const [codigo, setCodigo] = useState<number>(0);
    const [password, setPassword] = useState<number>(0);


    const navigate = useNavigate();
    const setFamilia = useVoidFamilyContext();

    const login = async () => {
        const familia: FamiliaModel = {
            ...EmptyFamilia,
            codigofamiliar: codigo,
            contrasena: password,
        }
        await loginFamilia(familia)
            .then((data) => {
                console.log(data)
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
            <img src={Icon} className="w-2/5 mx-auto" />
            <div className="bg-yellow-500 px-10 py-4 text-center mt-10 rounded-2xl">
                <h2 className="text-center text-4xl m-5 font-medium">Ingresar</h2>
                <div className="px-5 flex flex-wrap gap-7">
                    <InputsForm object={codigo} setObject={setCodigo} placeholder="Codigo Familiar" inputType="number" />
                    <InputsForm object={password} setObject={setPassword} placeholder="Contraseña" inputType="password" />
                </div>
                <div className="mt-10">
                    <PrimaryButton children="Ingresar" content="1" onClick={login} bg={"btn-yellow"} />
                    <PrimaryButton children="Registrar" content="2" onClick={() => navigate(routes.register)} bg="" />
                </div>
            </div>
        </div>
    )
}

export default Login