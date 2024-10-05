import { HeaderBar, Links, LinkItem, InfoPix, } from './styles'
import Pix from '../../assets/images/icones/Pix.png'


//menu de seções *na linha 28 temos os itens do carrinho
const Header = () => (
    <HeaderBar>
                
        <nav>
            <Links>
                <LinkItem>
                    <a href="#">FEMININO</a>
                </LinkItem>
                <LinkItem>
                    <a href="#">INFANTIL</a>
                </LinkItem>
                <LinkItem>
                    <a href="#">ÍNTIMA</a>
                </LinkItem>
                <LinkItem>
                    <a href="#">FITNESS</a>
                </LinkItem>
                <LinkItem>
                    <a href="#">EVANGÉLICA</a>
                </LinkItem>
            </Links>
        </nav>
        {/*essa linha decódigo vai pro rodape
        <div>
            <InfoPix>PAGUE COM PIX</InfoPix>
        <img src={Pix } width="20" height="20" alt="logo Pix" />
        </div>
        
        */}
    </HeaderBar >
)

export default Header