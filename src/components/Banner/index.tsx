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