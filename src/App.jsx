import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import InputName from './components/InputName'
import Pokedex from './components/Pokedex'
import PokedexDetail from './components/PokedexDetail'
import ProtectedRoutes from './components/ProtectedRoutes'
import mainimage from "./assets/images/pokedex1.png"

function App() {

  return (
    <div className='principalcont'>
      <HashRouter>
        <div className='mainimage'>
          <img className='mainimage-img' src={mainimage} alt="" />
          <div className='mainimagedown'>
                hola
          </div>
        </div>
        <div className='App'>
          <Routes>
            <Route path='/' element={<InputName />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/pokedex" element={<Pokedex />} />
              <Route path="/pokedex/:id" element={<PokedexDetail />} />
            </Route>

          </Routes>
        </div>
      </HashRouter>
    </div>

  )
}

export default App
