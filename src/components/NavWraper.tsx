import { useState } from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { routes } from '../routes'
import { ImgExit, ImgLogo, ImgMenu } from '../assets'

const NavWraper = () => {
    const navigate = useNavigate();
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false)
    const activeNavLink:
        | ((props: { isActive: boolean; isPending: boolean }) => string | undefined)
        | undefined = ({ isActive }) =>
            isActive ? "text-yellow-400" : " text-slate-50";

    const closeMenu = () => {
        setIsMenuActive(false)
    }

    return (
        <>
            <div className='bg-yellow-400 flex justify-between p-3'>
                <button onClick={() => setIsMenuActive(!isMenuActive)}>
                    <img src={ImgMenu} className='w-6' />
                </button>
                <h1 className='font-bold'>
                    App Ayllu Kuyuy
                </h1>
                <img src={ImgLogo} className='w-6' />
            </div>
            <div className={isMenuActive ? `fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-30 backdrop-blur` : ""}>
                <aside className={`fixed top-0 left-0 z-40 w-4/6 h-screen transition-transform  ${isMenuActive ? "translate-x-0" : "-translate-x-full"}`}>
                    <div className='h-full px-3 bg-cyan-900'>
                        <div className='h-2/6'>
                            <button className='ml-auto mr-0 block' onClick={closeMenu}>
                                <img src={ImgExit} alt="" className='mt-3' />
                            </button>
                            <img src={ImgLogo} className='w-32 mx-auto' />
                        </div>
                        <div className='h-4/6 '>
                            <ul className='space-y-8 font-medium text-slate-100 text-center'>
                                <li>
                                    <NavLink to={routes.home} className={activeNavLink} onClick={closeMenu} children="HOME" />
                                </li>
                                <li>
                                    <NavLink to={routes.family} className={activeNavLink} onClick={closeMenu} children="FAMILIA" />
                                </li>
                                <li>
                                    <NavLink to={routes.myhome} className={activeNavLink} onClick={closeMenu} children="MI HOGAR" />
                                </li>
                                <li>
                                    <NavLink to={routes.zones} className={activeNavLink} onClick={closeMenu} children="ZONAS DE ENCUENTRO" />
                                </li>
                                <li>
                                    <NavLink to={routes.bag} className={activeNavLink} onClick={closeMenu} children="MOCHILA" />
                                </li>
                                <li>
                                    <NavLink to={routes.plan} className={activeNavLink} onClick={closeMenu} children="PLAN" />
                                </li>
                                <li>
                                    <NavLink to={routes.resources} className={activeNavLink} onClick={closeMenu} children="RECURSOS" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
            <Outlet />
        </>
    )
}

export default NavWraper