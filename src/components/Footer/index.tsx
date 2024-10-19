import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
    <Container>
        <div className='container'>
            <FooterSection>
                <SectionTitle>ACESSO RÁPIDO</SectionTitle>
                <Links>
                    <li>
                        <Link>Destaque</Link>
                    </li>
                    <li>
                        <Link>Novidades</Link>
                    </li>
                    <li>    
                        <Link>Promoções</Link>
                    </li>
                </Links>
            </FooterSection>
            <FooterSection>
                <SectionTitle>CATEGORIAS</SectionTitle>
                <Links>
                <li>
                    <Link>Feminino</Link>
                </li>
                    <li>
                        <Link>Infantil</Link>
                    </li>
                        <li>
                            <Link>Evangélica</Link>
                        </li>
                        <li>
                            <Link>Fitness</Link>
                        </li>
                        <li>
                            <Link>Ítima</Link>
                        </li>
                </Links>
            </FooterSection>
            <p> www.tinamodas.com.br</p>
            <p>{currentYear} - &copy; Tina Modas  - Todos os direitos reservados.</p>

        </div>
    </Container>
)

export default Footer