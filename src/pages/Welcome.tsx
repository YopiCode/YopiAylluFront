import { PhoneButton, PrimaryButton } from '../components'
import { Icon, Welcome119 } from '../assets'
import { useNavigate } from "react-router-dom";
import { routes } from '../routes';

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='h-2/5'>
        <div className='flex justify-between mt-2 mx-4'>
          <PrimaryButton children='Registrar' onClick={()=>navigate(routes.register)}/>
          <PrimaryButton children='Ingresar' />
        </div>
        <img src={Icon} alt='Logo' className='w-3/6 mx-auto mt-10' />
      </div>

      <div className='mt-21 bg-cyan-900 h-3/5 text-center text-white pt-5 px-4'>
        <h1 className='text-3xl font-bold'>PLAN DE SEGURIDAD ANTE UN SISMO</h1>
        <h2 className='my-10 text-2xl'>"LA FAMILIAS SON UNIDAS POR UN MEJOR PAIS"</h2>
        <img src={Welcome119} className='rounded-lg w-full mx-auto' />
        <div className='grid grid-cols-2 mt-5 items-center font-bold'>
          <p>Número de Emergencia </p>
          <PhoneButton />
        </div>
      </div>
    </>
  )
}

export default Welcome