import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import { Welcome, Register, Login, Home } from './pages'
import NavWraper from './components/NavWraper'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.welcome} element={<Welcome />} />
        <Route path={routes.register} element={<Register />} />
        <Route path={routes.login} element={<Login />} />
        <Route element={<NavWraper />}>
          <Route path={routes.home} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
