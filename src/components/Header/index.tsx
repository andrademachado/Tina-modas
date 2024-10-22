import { Link } from 'react-router-dom'
import { HeaderBar, LinkItem, Links, Secao,  } from './styles'
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
                <LinkItem><Link to="/categories">CATEGORIAS</Link></LinkItem>  
                <LinkItem><Link to="/feminino">FEMININO</Link></LinkItem>
                <LinkItem><Link to="/infantil">INFANTIL</Link></LinkItem>  
                <LinkItem><Link to="/promocoes">PROMOÇÕES</Link></LinkItem>
            </Links>
        </Secao>
        <Link to="/atendimento">
            <img src={telefone} width="16" height="16" alt='icone de telefone' />
        ATENDIMENTO
        </Link>        
        <a href="#">
            0
            <img src={sacola} width="40" height="40" alt='sacola' />
        </a>
    </HeaderBar>
)

export default Header
