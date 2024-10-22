import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Categories from './pages/Categories';
import Feminino from './pages/Feminino';
import Infantil from './pages/Infantil';
import Promocoes from './pages/Promocoes';
import Atendimento from './pages/Atendimento';

const Rotas = () => (
    <Routes>
        <Route path= "/" element = {< Home />} />
        <Route path = "/categories" element = {< Categories />} />
        <Route path="/feminino" element={< Feminino />} />
        <Route path="/infantil" element={< Infantil />} />
        <Route path="/promocoes" element={< Promocoes />} />
        <Route path="/atendimento" element={< Atendimento />} />
    </Routes>
)



export default Rotas;
