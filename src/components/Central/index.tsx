import TinaFone from '../../assets/images/TinaCelular5.jpg'
import Zap from '../../assets/images/icones/ligar.png'
import Atendimento from '../../assets/images/icones/atendimento-ao-cliente.png'
import { Card, CardAtendimento, Container, Horario, Info, InfoContato, Tina, Title, WhatsApp } from './styles'


const whatsappNumber = '5574981283924';
const Central = () =>(
    <div>
        <div className="container">
            <Container>
                <Card>
                    <Info>
                        <h1>CENTRAL DE ATENDIMENTO</h1>
                        <Title>  DÚVIDAS ?  </Title>
                        <h2>FALE COM UM DE NOSSOS ATENDENTES</h2>
                    </Info>
                    <Tina src={TinaFone} width="400" height="400" alt="tina com Celular" />
                </Card> 

                <CardAtendimento>
                    <WhatsApp>
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    <img src={Zap} width="100" height="100" alt="Icone do whatszap" />
                        
                    </a>
                        <InfoContato>
                        <h1>whatsapp</h1>
                        <h1>(74)98128-3924</h1>
                        </InfoContato>
                    </WhatsApp>
            <div>
            </div>
                    <Horario>
                    <img src={Atendimento} width="100" height="100" alt="Icone do atendimento" />
                    <InfoContato>
                    <h1>Horário de atendimento</h1>
                    <h2> Segunda a Sexta: das 10:00 às 17:00. </h2>
                    </InfoContato>
                    </Horario>
                </CardAtendimento>

            </Container>
        </div>
    </div>
)

export default Central