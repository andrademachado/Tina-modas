import { title } from "process"

import ProductsList from "../../components/ProductList"

import conjuntoCountry from '../../assets/images/conjuncountry.jpg'
import menino from '../../assets/images/menino.jpg'
import evangelica from '../../assets/images/evangelica.jpg'
import menino02 from '../../assets/images/menino02.jpg'
import menina01 from '../../assets/images/menina01jpg.jpg'
import menina02 from '../../assets/images/menina02.jpg'
import Roupa from "../../models/Roupa"

const destaque: Roupa[] =[
    {
        id:1,
        category:'Feminino',
        description: 'Branco',
        title: 'Conjunto country',
        system: 'P,M,G ,GG',
        infos:[' 10% ' , ' R$ 250,00  '],
        image: conjuntoCountry ,
    },
    {
        id: 2,
        category: 'INFANTIL',
        description: 'Camisa Polo Verde',
        title: 'CAMISA',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: menino,
    },
    
    {
        id: 3,
        category: 'EVANGELICA',
        description: 'Vestido Floral Azul',
        title: 'VESTIDO FLORAL',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: evangelica,
    }
]

const novidades: Roupa[] =  [
    {
        id: 4,
        category: 'INFANTIL',
        description: 'Branco',
        title: 'CAMISA BRANCA',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: menino02,
    },
    {
        id: 5,
        category: 'Feminino',
        description: 'Branco',
        title: 'CAMISA ROSA',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: menina01,
    },
    {
        id: 6,
        category: 'Feminino',
        description: 'Branco',
        title: 'CAMISA PRETA',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: menina02,
    },
    
    
]

const Categories =() => (
    <>   
        <ProductsList roupas={destaque} title="Feminino" background="Rose" />
        <ProductsList roupas={novidades} title="INFANTIL" background="concha" />
        <ProductsList roupas={destaque} title="EVANGÉLICA" background="Rose" />
        <ProductsList roupas={novidades} title="FITNESS" background="concha" />
        <ProductsList roupas={novidades} title="ÍTIMA" background="Rose" />
    </>
)

export default Categories