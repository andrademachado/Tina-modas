import { Link } from 'react-router-dom'
import {   Card, Cartao, Cartaz, Contato, Contexto, Cop, Email, LinkItem, Logo, LogoCard, LogoSecao, Pagamento, Secao } from './styles'

import instagran from '../../assets/images/icones/instagram_6422200.png'
import zap from '../../assets/images/icones/whatsapp2_6422213.png'
import bandeiras from '../../assets/images/bandeiras3.jpg'


const whatsappNumber = '5574981283924';
const currentYear = new Date().getFullYear()

const Footer = () => (
    <Cartaz>
        <div className='container'>
            <Secao >
                <h3>ACESSO RÁPIDO</h3>
                <Secao>
                    <LinkItem ><Link to="/categories">CATEGORIAS</Link></LinkItem>
                    <LinkItem ><Link to="/feminino">FEMININO</Link></LinkItem>
                    <LinkItem ><Link to="/infantil">INFANTIL</Link></LinkItem>
                    <LinkItem ><Link to="/promocoes">PROMOÇÕES</Link></LinkItem>
                    <LinkItem ><Link to="/atendimento">ATENDIMENTO</Link></LinkItem>
                </Secao>                
            </Secao>
            <Contato>
                <h3>CONTATO</h3>
                <Logo src={instagran} width="30" height="30" alt="logo do instagran" />
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <Logo src={zap} width="30" height="30" alt="logo do whatszap" /> 
                </a>                
                <Contexto>74 98128-3924</Contexto>
                <Email> www.tinamodas.com.br</Email> 
            </Contato>
            <Pagamento>
                <h3>PAGAMENTOS</h3>
                <LogoSecao>
                    <img src={bandeiras} width="300" height="100" alt="" />
                </LogoSecao>
            </Pagamento>
        </div>
        <Cop>{currentYear} - &copy; Tina Modas  - Todos os direitos reservados.</Cop>
    </Cartaz>
)

export default Footer

{/*
    
    import { Link } from 'react-router-dom'

import { Container, FooterSection, LinkItem, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
    <Container>
        <div className='container'>
            <FooterSection>
                <SectionTitle>ACESSO RÁPIDO</SectionTitle>
                <Links>
                    <Link to="/categories">CATEGORIAS</Link></LinkItem>
                    <LinkItem><Link to="/feminino">FEMININO</Link></LinkItem>
                    <LinkItem><Link to="/infantil">INFANTIL</Link></LinkItem>
                    <LinkItem><Link to="/promocoes">PROMOÇÕES</Link></LinkItem>
                    <LinkItem><Link to="/atendimento">ATENDIMENTO</Link></LinkItem>
                </Links>
            </FooterSection>
            <div>
                <h1>CANAIS DE ATENDIMENTO</h1>
            </div>
            
            
            <p> www.tinamodas.com.br</p>
            <p>{currentYear} - &copy; Tina Modas  - Todos os direitos reservados.</p>

        </div>
    </Container>
)

export default Footer
    */}