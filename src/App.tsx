import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Top from './components/Top'
import Header from './components/Header';
import { GlobalCss, } from './styles';
import Banner from './components/Banner';
import Cartaz from './components/Cartaz'


const rotas = createBrowserRouter([
  {
    path:'/',
    element: (
      <>
        <Banner />
        <Cartaz />
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
