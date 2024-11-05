
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Weather } from './components/Weather';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Alertbox } from './components/Alertbox';
import { Navigationbar } from './components/Navigationbar';
import { Contact } from './components/Contact';


function App() {
  return (
     <BrowserRouter>
     <Navigationbar></Navigationbar>
     <Routes>
       <Route path="/" element={<Weather></Weather>}></Route>
       <Route path="/about" element={<Alertbox></Alertbox>}></Route>
       <Route path="/contact" element={<Contact></Contact>}></Route>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
