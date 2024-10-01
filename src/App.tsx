import Top from './components/Top'
import Header from './components/Header';

import { GlobalCss, Container } from './styles';

function App() {
  return (
    <>
      <GlobalCss />
        <Top />
        <Header />
      <Container>
      </Container>
    </>
  )
}

export default App;
