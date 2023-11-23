import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rutas from './pages/Rutas';
import { Corredores, Amarillo, Azul, Morado, Rojo, Amarillo101, Amarillo102, Azul301, Azul303, Azul305, Azul336, Azul370, Azul371, Morado404, Morado405, Morado406, Morado409, Morado412, Rojo201, Rojo204, Rojo206, Rojo209} from './pages/Corredores';
import {Burra, Este, Oeste} from './pages/Burra';
import Paraderos from './pages/Paraderos'


function App() {
  return (
    <>  
    

    <Router>
      <Sidebar />
      
      <Routes>

        <Route path='/rutas' element = {<Rutas/>} />

        <Route path='/paraderos' element = {<Paraderos/>} />

        <Route path='/corredores' element = {<Corredores/>} />

          <Route path='/corredores/amarillo' element= {<Amarillo/>} />
            <Route path='/corredores/amarillo/101' element= {<Amarillo101/>} />
            <Route path='/corredores/amarillo/102' element= {<Amarillo102/>} />
          
          <Route path='/corredores/azul' element= {<Azul/>} />
            <Route path='/corredores/azul/301' element= {<Azul301/>}/>
            <Route path='/corredores/azul/303' element= {<Azul303/>}/>
            <Route path='/corredores/azul/305' element= {<Azul305/>}/>
            <Route path='/corredores/azul/336' element= {<Azul336/>}/>
            <Route path='/corredores/azul/370' element= {<Azul370/>}/>
            <Route path='/corredores/azul/371' element= {<Azul371/>}/>


          <Route path='/corredores/morado' element= {<Morado/>} />
            <Route path='/corredores/morado/404' element= {<Morado404/>}/>
            <Route path='/corredores/morado/405' element= {<Morado405/>}/>
            <Route path='/corredores/morado/406' element= {<Morado406/>}/>
            <Route path='/corredores/morado/409' element= {<Morado409/>}/>
            <Route path='/corredores/morado/412' element= {<Morado412/>}/>
          
          <Route path='/corredores/rojo' element= {<Rojo/>} />
            <Route path='/corredores/rojo/201' element= {<Rojo201/>}/>
            <Route path='/corredores/rojo/204' element= {<Rojo204/>}/>  
            <Route path='/corredores/rojo/206' element= {<Rojo206/>}/>
            <Route path='/corredores/rojo/209' element= {<Rojo209/>}/>

        <Route path='/burra' element = {<Burra/>} />
          <Route path='/burra/este' element = {<Este/>} />
          <Route path='/burra/oeste' element = {<Oeste/>} />

      </Routes>
    </Router>
    </>
  );
}

export default App;

