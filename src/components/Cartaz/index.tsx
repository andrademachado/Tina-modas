import { CartazContainer, ImgEsquerda, SubTitulo, Titulo, Carro  } from './styles'
import Pacote from '../../assets/images/Pacotejpg.jpg'
import TinaApresentando from '../../assets/images/TinaApresentando.jpg'
import Transport from '../../assets/images/icones/transporte.png'

export const Cartaz = () => (
    <CartazContainer>
        <ImgEsquerda src={Pacote} width="435" height="380" alt="Tina Modas" />
        <div>
            <Carro src={Transport} width="90" height="90" alt="Caminhão de entrega" />
            <Titulo>FRETE GRÁTIS <br />
                EM TODA A BAHIA
            </Titulo>
            <SubTitulo>  <br />
                COMPRAS APARTIR <br />
                DE       R$200,00.
            </SubTitulo>
        </div>
        <img src={TinaApresentando} width="360" height="380" alt="Tina Modas" />

    </CartazContainer>
)

export default Cartaz

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