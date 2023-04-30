import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import { Welcome, Register } from './pages'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.welcome} element={<Welcome />} />
        <Route path={routes.register} element={<Register />} />
        <Route path={routes.login} element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
