import { HeaderBar, Links, LinkItem, } from './styles'


//menu de seções *na linha 28 temos os itens do carrinho
const Header = () => (
    <HeaderBar>        
        <nav>
            <Links>
                <LinkItem>
                    <a href="#">Feminino</a>
                </LinkItem>
                <LinkItem>
                    <a href="#">Infantil</a>
                </LinkItem>
                <LinkItem>
                    <a href="#">Ítima</a>
                </LinkItem>
                <LinkItem>
                    <a href="#">Fitniss</a>
                </LinkItem>
                <LinkItem>
                    <a href="#">Evangélica</a>
                </LinkItem>
                <LinkItem>
                    <a href="#">Atendimento</a>
                </LinkItem>
            </Links>
        </nav>        
    </HeaderBar >
)

export default Header