import Pacote from '../../assets/images/Pacotejpg.jpg'
import TinaApresentando from '../../assets/images/TinaApresentando.jpg'
import Transport from '../../assets/images/icones/transporte.png'
import Cartao from '../../assets/images/icones/cartao4.png'
import Pix from '../../assets/images/icones/Pix.png'
import Button from '../Button'
import frete from '../../assets/images/anuncioFrete2.jpg'
import {   Container,             List,  } from './styles'



export const Banner = () => (
    <Container  >
        <div className='container' >
        <List>
                <li >
                    <img src={Pacote} width="405" height="370" alt="Tina com sacolas" />
                </li >
                
                    <li>

                    <img src={frete} width="330" height="370" alt="Tina com sacolas" />
                    </li>
                
                
            <li>
                <img src={TinaApresentando} width="330" height="370" alt="Tina com sacolas" />
            </li>
        </List>
            
        </div>
    </Container>
)

export default Banner
