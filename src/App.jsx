import './App.css'
import MapCards from './MapCards/MapCards'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Anjir from "./Maps/Anjir";
import Anor from "./Maps/Anor";
import Bek from "./Maps/Bek";
import Besh from "./Maps/Besh";
import Bosphorus from "./Maps/Bosphorus";
import Chor from "./Maps/Chor";
import Donerci from "./Maps/Donerci";
import MarMar from "./Maps/MarMar";
import Qanotchi from "./Maps/Qanotchi";
import SimSim from "./Maps/SimSim";

function App() {

  return (
    <>

      <Router>
        <Routes>
        <Route path="/" element={<MapCards />} />
        <Route path="/maps/anjir-rossiya" element={<Anjir />} />
        <Route path="/maps/anor-rossiya" element={<Anor />} />
        <Route path="/maps/bek-osiyo-yakkasaroy" element={<Bek />} />
        <Route path="/maps/besh-qozon-glinka" element={<Besh />} />
        <Route path="/maps/bosphorus-viaport" element={<Bosphorus />} />
        <Route path="/maps/chor-minor" element={<Chor />} />
        <Route path="/maps/donerci-hamdi-usta-glinka" element={<Donerci />} />
        <Route path="/maps/mar-mar-rossiya" element={<MarMar />} />
        <Route path="/maps/qanotchi-qushbegi" element={<Qanotchi />} />
        <Route path="/maps/sim-sim-muqimiy" element={<SimSim />} />
        </Routes>
      </Router>
      
    </>
  )
}
export default App;