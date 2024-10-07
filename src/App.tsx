import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Top from './components/Top'
import Header from './components/Header';
import { GlobalCss, } from './styles';
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
        <Top />
        <Header />
        
        <div className='container'>

        </div>
        <RouterProvider router={rotas} />
    </>
  )
}

export default App;
