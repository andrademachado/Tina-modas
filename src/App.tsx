import {  BrowserRouter } from 'react-router-dom'


import Header from './components/Header';
import { GlobalCss,Container } from './styles';

import { Anuncio } from './components/Anuncio';
import Rotas from './routes'
import Footer from './components/Footer';



function App() {
    return (
      <BrowserRouter>
      <GlobalCss />
        <div className='container'>
        <Header />
        </div>
        <Anuncio />
        <Rotas />
        <Footer />
      </BrowserRouter>
  )
}

export default App;
