import Product from "../Product"

import { Container,List } from './styles'

type Props = {
    title: string;
    background: 'brancoRose' | 'concha' ;
}

const ProductsList = ({ background, title }: Props) => (
    <Container>
        <div className='container'>
        <h2>{title}</h2>
        <List>
            <Product 
        //*NA LINHA 17  EM CATEGORY MUDAMOS O NOME DO PRODUTO ABAIXO DA IMG
            category='Destaque' 
            description='conjunto' 
            image='//placehold.it/222x250' 
            infos={['-10%', 'R$ 150,00']}
            system='conferir'
            title='conjunto'
            />
            <Product
                category='Destaque'
                description='conjunto'
                image='//placehold.it/222x250'
                infos={['-10%', 'R$ 150,00']}
                system='conferir'
                title='conjunto'
            />
            <Product
                category='Destaque'
                description='conjunto'
                image='//placehold.it/222x250'
                infos={['-10%', 'R$ 150,00']}
                system='conferir'
                title='conjunto'
                />
                <Product
                    category='Destaque'
                    description='conjunto'
                    image='//placehold.it/222x250'
                    infos={['-10%', 'R$ 150,00']}
                    system='conferir'
                    title='conjunto'
                />    
        </List>
        </div>
    </Container>
)

export default ProductsList