import Roupa from "../../models/Roupa";
import Product from "../Product"

import { Container,List } from './styles'

export type Props = {
    title: string;
    background: 'Rose' | 'concha' ;
    roupas: Roupa[]
}

const ProductsList = ({ background, title, roupas }: Props) => (
    <Container background={background}>
        <div className='container'>
        <h2>{title}</h2>
        <List>
            {roupas.map((roupa) => (
                <Product 
                key={roupa.id}
                category={roupa.category} 
                description={roupa.description} 
                image={roupa.image} 
                infos={roupa.infos}
                system={roupa.system}
                title={roupa.title}
                />
            ))}
        </List>
        </div>
    </Container>
)

export default ProductsList