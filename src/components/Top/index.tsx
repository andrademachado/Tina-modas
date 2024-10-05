import { Topo,Logotipo, Title, Bag, Service, Card, InfoCartao, Cartao } from "./styles"
import LogoTina from "../../assets/images/logoTina.jpg"
import sacola from "../../assets/images/bags.svg"
import Telefone from "../../assets/images/phone.svg"
import Cartao4 from '../../assets/images/icones/cartao4.png'

import Elo from "../../assets/images/icones/Elo.svg"
import Hipercard from "../../assets/images/icones/Hipercard--Streamline-Svg-Logos.svg"
import Mastercard from "../../assets/images/icones/Mastercard.svg"
import Visa from "../../assets/images/icones/Visa.svg"


const Top = () => (
    <Topo>
        <Logotipo>
            <a href="#">
            <img src={LogoTina} width="90" height="50" alt="Tina Modas" />
            </a>
        </Logotipo>        
        {/* Esse trecho pode ser usado no rodapé
        <Card>
            <img src={Mastercard} width="40" height="40" alt="Tina Modas" />
            <img src={Hipercard} width="40" height="40" alt="Tina Modas" />
            <img src={Visa} width="40" height="40" alt="Tina Modas" />
            <img src={Elo} width="44" height="44" alt="Tina Modas" />
        </Card>
        */}
        <Cartao>
        
        <img src={Cartao4} width="35" height="35" alt="Tina Modas" />
        <InfoCartao>ATÉ 10X NO CARTÃO</InfoCartao>

        </Cartao>
        <Title>
            <img src={LogoTina} width="160" height="90" alt="Tina Modas" />
        </Title>
        <Service>
            <img src={Telefone} width="22" height="22" alt="Gancho de telefone" />
            <a href="#">
                <h4>Atendimento</h4>
            </a>
        </Service>
        <Bag href="#">
            0
            <img src={sacola} width="45" height="45" alt="sacola" />
        </Bag>
    </Topo>
)

export default Top