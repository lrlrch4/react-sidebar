import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Rutas from './pages/Rutas';
// import { Corredores, Amarillo, Azul, Morado, Rojo, Amarillo101, Amarillo102, Azul301, Azul303, Azul305, Azul336, Azul370, Azul371, Morado404, Morado405, Morado406, Morado409, Morado412, Rojo201, Rojo204, Rojo206, Rojo209} from './pages/Corredores';
// import {Burra, Este, Oeste} from './pages/Burra';
// import Paraderos from './pages/Paraderos'
import Map from './pages/Map'


function App() {

  const corredores = ['101', '107', '201', '204', '206', '209', '301', '303', '305', '336', '370', '371', '404', '405', '406', '409', '412']
  const amarillo = ['101', '107']
  const azul =  ['301', '303', '305', '336', '370', '371']
  const morado = ['404', '405', '406', '409', '412']
  const rojo = ['201', '204', '206', '209']


  return (
    <>  
    

    <Router>
      <Sidebar />

      <Routes>

        <Route path='/' element={<Map item={{ route: 0 }} />} />
        <Route path="/paraderos" element={<Map item={{ route: 0}} />} />
        <Route path="/corredores" element={<Map item={{ route:  corredores}} />} />
        <Route path="/corredores/amarillo" element={<Map item={{ route: amarillo }} />}  />
          {amarillo.map((route) => {
              return (
                <Route path={`/corredores/amarillo/${route}`} element={<Map item={{ route: [route] }} />} />
              )
            })
          }

        <Route path="/corredores/azul" element={<Map item={{ route: azul}} />}  />
          {azul.map((route) => {
              return (
                <Route path={`/corredores/azul/${route}`} element={<Map item={{ route: [route] }} />} />
              )
            })
          }   

        <Route path="/corredores/morado" element={<Map item={{ route:  morado}} />} />
          {morado.map((route) => {
              return (
                <Route path={`/corredores/morado/${route}`} element={<Map item={{ route: [route] }} />} />
              )
            })
          }

        <Route path="/corredores/rojo"  element={<Map item={{ route:  rojo}} />}/>
          {rojo.map((route) => {
              return (
                <Route path={`/corredores/rojo/${route}`} element={<Map item={{ route: [route] }} />} />
              )
            })
          }
          
        <Route path="/burra" element={<Map item={{ route: 0 }} />} />
        <Route path="/burra/este" element={<Map item={{ route: 0 }} />} />
        <Route path="/burra/oeste" element={<Map item={{ route: 0 }} />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;

