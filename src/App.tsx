import Top from './components/Top'
import Header from './components/Header';

import { GlobalCss, } from './styles';
import Cartaz from './components/Cartaz';


function App() {
    return (
    <>
      <GlobalCss />
        <Top />
        <Header />
        <Cartaz />
        
        <div className='container'>
        </div>
    </>
  )
}

export default App;
