import Pacote from '../../assets/images/Pacotejpg.jpg'
import TinaApresentando from '../../assets/images/TinaApresentando.jpg'
import frete from '../../assets/images/anuncioFrete2.jpg'
import { Container, List, } from './styles'



export const Banner = () => (
    <Container  >
        <div className='container' >
            <List>
                <li >
                    <img src={Pacote} width="435" height="370" alt="Tina com sacolas" />
                </li >

                <li>

                    <img src={frete} width="290" height="370" alt="Tina com sacolas" />
                </li>


                <li>
                    <img src={TinaApresentando} width="380" height="370" alt="Tina com sacolas" />
                </li>
            </List>

        </div>
    </Container>
)

export default Banner