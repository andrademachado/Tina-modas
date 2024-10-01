import { HeaderBar, Links, LinkItem, } from './styles'


//menu de seções *na linha 28 temos os itens do carrinho
const Header = () => (
    <HeaderBar>        
        <nav>
            <Links>
                <LinkItem>
                    <a href="#">Moda Feminina</a>
                </LinkItem>
                <LinkItem>
                    <a href="#">Moda Infantil</a>
                </LinkItem>
                <LinkItem>
                    <a href="#">Moda Fitnes</a>
                </LinkItem>
                <LinkItem>
                    <a href="#">Moda Evangélica</a>
                </LinkItem>
                <LinkItem>
                    <a href="#">Moda Ítima</a>
                </LinkItem>
                <LinkItem>
                    <a href="#">Atendimento</a>
                </LinkItem>
            </Links>
        </nav>        
    </HeaderBar >
)

export default Header