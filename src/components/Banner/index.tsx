import Pacote from '../../assets/images/Pacotejpg.jpg'
import TinaApresentando from '../../assets/images/TinaApresentando.jpg'
import Transport from '../../assets/images/icones/transporte.png'
import Cartao from '../../assets/images/icones/cartao4.png'
import Pix from '../../assets/images/icones/Pix.png'
import Button from '../Button'
import {  Botao, Car, Container,  Frase,  Frete,  List,  Title,  } from './styles'



export const Banner = () => (
    <Container  >
        <div className='container' >
        <List>
            <li>
                <img src={Pacote} width="405" height="370" alt="Tina com sacolas" />
            </li>
                <Frete >
                    < Car src={Transport} width="80" height="80" alt=" Ícone da transportadora" />
                    <Title> FRETE GRÁTIS/BA</Title>
                    < Botao>
                <Button type="link" to="/produto" title="click aqui">
                    CONFERIR
                </Button>
                    </ Botao>   
                    <Frase>*Nas compras à partir de R$200,00</Frase>
                </Frete >
            <li>
                <img src={TinaApresentando} width="330" height="370" alt="Tina com sacolas" />
            </li>
        </List>
            
        </div>
    </Container>
)

export default Banner


{/*


    import { CartazContainer, ImgEsquerda, CardCenter, Titulo, Acionar, CardCar, Subtitle, Title, Text   } from './styles'
import Pacote from '../../assets/images/Pacotejpg.jpg'
import TinaApresentando from '../../assets/images/TinaApresentando.jpg'
import Transport from '../../assets/images/icones/transporte.png'
import Button from '../Button'

export const Banner = () => (
    <CartazContainer>
        <ImgEsquerda src={Pacote} width="435" height="380" alt="Tina Modas" />
        <CardCenter>
            <Titulo>
                <CardCar src={Transport} width="90" height="90" alt="Caminhão de entrega" />
                <Title>FRETE GRÁTIS </Title>
                <Subtitle>
                    EM TODA A BAHIA
                </Subtitle>
            </Titulo>
            <Acionar>
            <Button type="link" to="/produto" title="click aqui">
                CONFERIR
            </Button>
            <br />
            <br />
            <br />
            <br />
                <br />
            </Acionar>
                <Text>
                *COMPRAS APARTIR  DE R$200,00.
                </Text>
        </CardCenter>
        <img src={TinaApresentando} width="360" height="380" alt="Tina Modas" />
    </CartazContainer>
)

export default Banner

{/*
        Código do baner com imagem de fundo

import { Imagem, Titulo, Texto, Iconepix, Subtitulo } from "./styles"
import TinaBanner from '../../assets/images/TinaSacolajpg.jpg'
import Pix from '../../assets/images/Pix.png'


const Banner = () => <Imagem style = {{ backgroundImage: `url(${TinaBanner})` }}>
    <div className="container">
        <Titulo>
        FRETE <br />
        GRÁTIS <br/>
        </Titulo>
        <Texto>
            PARA TODA BAHIA
            <br />
            NAS COMPRAS À PARTIR DE R$200,00
        </Texto>
        <Subtitulo>
            <img src={Pix} width="40" height="40" />
        <h4>
            PAGUE COM PIX
        </h4>

        </Subtitulo>
    </div>
</Imagem>


export default Banner
    */}