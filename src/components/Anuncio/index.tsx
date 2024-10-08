import { Card, Container, Info, PaguePix } from "./styles"
import Cartao from '../../assets/images/icones/cartao4.png'
import Pix from '../../assets/images/icones/Pix.png'

export const Anuncio = () => (
    <Container>
        <div className="container">
            <Info>
                <Card>
                    <img src={Cartao} width="40" height="40" alt="" />
                    <h2>ATÉ 10X NO CARTÃO</h2>
                </Card>
                <PaguePix >
                    <img src={Pix} width="40" height="40" alt="" />
                    <h2>PAGUE COM PIX</h2>
                </PaguePix >
            </Info> 
        </div>
    </Container>

)

export default Anuncio