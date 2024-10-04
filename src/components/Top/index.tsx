import { Topo,Logotipo, Title, Bag } from "./styles"
import Logo from "../../assets/images/logo.jpg"
import sacola from "../../assets/images/bags.svg"

const Top = () => (
    <Topo>
        <Logotipo>
            <img src={Logo} width="100" height="100" alt="Tina Modas" />
        </Logotipo>
        <Title>
        Thina  Modas
        </Title>
        <Bag href="#">
            0
            <img src={sacola} width="55" height="55" alt="sacola" />
        </Bag>
    </Topo>
)

export default Top