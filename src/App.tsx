import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Header from './components/Header';
import { GlobalCss,Container } from './styles';
import Banner from './components/Banner';

import Product from './components/Product';
import ProductsList from './components/ProductList';


{/*NA LINHA 19  O TITLE MUDA O NOME DA SEÇÃO QUE VAI INICAIR A VITRINE DE PRODUTOS- PARA MUDAR O NOME DO PRODUTO É EM PRODUCTSlIST*/}
const rotas = createBrowserRouter([
  {
    path:'/',
    element: (
      <>
        
        <Banner />
        <ProductsList title="DESTAQUE" background='brancoRose' />
      </>
    )
  }
])



function App() {
    return (
    <>
      <GlobalCss />
        
        
        <div className='container'>
        <Header />
        </div>
        <RouterProvider router={rotas} />
    </>
  )
}

export default App;
