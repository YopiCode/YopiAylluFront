import { Icon, Return } from "../assets"
import { ImgButton, InputsForm, PrimaryButton } from "../components"
import { useNavigate } from "react-router-dom";
import { routes } from '../routes';
import { EmptyFamilia, FamiliaModel } from "../models";
import useSend from "../hooks/useSendInput";
import { loginFamilia } from "../services/FamiliaService";
import useLocalStoreage from "../hooks/useLocalStoreage";


const Login = () => {
    const navigate = useNavigate()
    const { model, handleChange } = useSend<FamiliaModel>(EmptyFamilia);
    const [codigofamiliar, setCodigoFamiliar] = useLocalStoreage<number>("codigofamiliar", 0)

    const login = async () => {
        setCodigoFamiliar(model.codigofamiliar)
        await loginFamilia(model)
            .then((data) => {
                if (!data.error) {
                    navigate(routes.home)
                }else{
                    setCodigoFamiliar(0)
                }
            })
    }


    return (
        <div className="m-2 h-full">
            <ImgButton content={Return} onClick={() => navigate(routes.welcome)} />
            <img src={Icon} className="w-2/5 mx-auto" />
            <div className="bg-yellow-500 px-10 py-4 text-center mt-10 rounded-2xl">
                <h2 className="text-center text-4xl m-5 font-medium">Ingresar</h2>
                <div className="px-5 flex flex-wrap gap-7">
                    <InputsForm placeholder="Codigo Familiar" itemType="text" onChange={handleChange} content="codigofamiliar" />
                    <InputsForm placeholder="Contraseña" itemType="password" onChange={handleChange} content="contrasena" />
                </div>
                <div className="mt-10">
                    <PrimaryButton children="Ingresar" content="1" onClick={login} />
                    <PrimaryButton children="Registrar" content="2" onClick={() => navigate(routes.register)} />
                </div>
            </div>
        </div>
    )
}

export default Login