import {  BrowserRouter } from 'react-router-dom'


import Header from './components/Header';
import { GlobalCss,Container } from './styles';

import { Anuncio } from './components/Anuncio';
import Rotas from './routes'



function App() {
    return (
      <BrowserRouter>
      <GlobalCss />
        <div className='container'>
        <Header />
        </div>
        <Anuncio />
        <Rotas />
      </BrowserRouter>
  )
}

export default App;
