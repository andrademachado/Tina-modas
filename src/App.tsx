import Top from './components/Top'
import Header from './components/Header';
import Banner from './components/Banner'
import { GlobalCss, } from './styles';


function App() {
    return (
    <>
      <GlobalCss />
        <Top />
        <Header />
        <Banner />
        <div className='container'>
        </div>
    </>
  )
}

export default App;
