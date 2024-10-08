import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Header from './components/Header';
import { GlobalCss,Container } from './styles';

import { Anuncio } from './components/Anuncio';
import Home from './pages/Home';




{/*NA LINHA 19  O TITLE MUDA O NOME DA SEÇÃO QUE VAI INICAIR A VITRINE DE PRODUTOS- PARA MUDAR O NOME DO PRODUTO É EM PRODUCTSlIST*/}
const rotas = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  }
])



function App() {
    return (
    <>
      <GlobalCss />
        
        
        <div className='container'>
        <Header />
        
        
        </div>
        <Anuncio />
        <RouterProvider router={rotas} />
    </>
  )
}

export default App;
