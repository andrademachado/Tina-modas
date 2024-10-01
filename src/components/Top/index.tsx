import { Topo,Logotipo, Title, Bag } from "./styles"
import Logo from "../../assets/images/Logo1.jpg"
import sacola from "../../assets/images/bags.svg"

const Top = () => (
    <Topo>
        <Logotipo>
            <img src={Logo} width="75" height="75" alt="Tina Modas" />
        </Logotipo>
        <Title>
        Tina  Modas
        </Title>
        <Bag href="#">
            0
            <img src={sacola} width="35" height="35" alt="sacola" />
        </Bag>
    </Topo>
)

export default Top