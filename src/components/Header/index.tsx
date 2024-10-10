import { Link } from 'react-router-dom'
import { HeaderBar, LinkItem, Links, Secao, } from './styles'
import logo from '../../assets/images/logoTina.jpg'
import sacola from '../../assets/images/bags.svg'
import telefone from '../../assets/images/phone.svg'

const Header = () =>  (

    <HeaderBar>
        <Link to="/">
        <img src={logo} width="170" height="70" alt="Tina Modas" />
        </Link>
        <Secao>
            <Links>
                <Link to="/categories">CATEGORIAS</Link>
                <LinkItem><a href="#">DESTAQUE</a></LinkItem>
                <LinkItem><a href="#">NOVIDADES</a></LinkItem> 
                <LinkItem><a href="#">PROMOÇÕES</a></LinkItem>
            </Links>
        </Secao>
        <a href='#'>
            <img src={telefone} width="16" height="16" alt='sacola' />
            ATENDIMENTO
        </a>
        <a href="#">
            0
            <img src={sacola} width="40" height="40" alt='sacola' />
        </a>
    </HeaderBar>
)

export default Header




{/*
    



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

        </HeaderBar >
    )
    
    export default Header
    
    */}
   