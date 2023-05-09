import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import { Welcome, Register, Login, Home, MyHome, Family, Zone, Bag, Plan, Recursos, NotFound } from './pages'
import NavWraper from './components/NavWraper'
import FamilyProvider from './context/FamilyProvider'
import ProtectedFamilia from './components/protected/ProtectedFamilia'

function App() {

  return (
    <BrowserRouter>
      <FamilyProvider>
        <Routes>
          <Route path={routes.welcome} element={<Welcome />} />
          <Route path={routes.register} element={<Register />} />
          <Route path={routes.login} element={<Login />} />ç
          <Route element={<ProtectedFamilia href={routes.welcome} />}>
            <Route element={<NavWraper />}>
              <Route path={routes.home} element={<Home />} />
              <Route path={routes.family} element={<Family />} />
              <Route path={routes.myhome} element={<MyHome />} />
              <Route path={routes.zones} element={<Zone />} />
              <Route path={routes.bag} element={<Bag />} />
              <Route path={routes.plan} element={<Plan />} />
              <Route path={routes.resources} element={<Recursos />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FamilyProvider>
    </BrowserRouter>
  )
}

export default App
