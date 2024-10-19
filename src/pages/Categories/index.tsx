import { title } from "process"

import ProductsList from "../../components/ProductList"

import conjuntoCountry from '../../assets/images/conjuncountry.jpg'
import menino from '../../assets/images/menino.jpg'
import evangelica from '../../assets/images/evangelica.jpg'
import menino02 from '../../assets/images/menino02.jpg'
import menina01 from '../../assets/images/menina01jpg.jpg'
import menina02 from '../../assets/images/menina02.jpg'
import Roupa from "../../models/Roupa"

const fitness: Roupa[] =[
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
    },
    {
        id: 4,
        category: 'EVANGELICA',
        description: 'Vestido Floral Azul',
        title: 'VESTIDO FLORAL',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: evangelica,
    }
]

const intima: Roupa[] =  [
    {
        id: 5,
        category: 'INFANTIL',
        description: 'Branco',
        title: 'CAMISA BRANCA',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: menino02,
    },
    {
        id: 6,
        category: 'Feminino',
        description: 'Branco',
        title: 'CAMISA ROSA',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: menina01,
    },
    {
        id: 7,
        category: 'Feminino',
        description: 'Branco',
        title: 'CAMISA PRETA',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: menina02,
    },
    {
        id: 8,
        category: 'EVANGELICA',
        description: 'Vestido Floral Azul',
        title: 'VESTIDO FLORAL',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: evangelica,
    }
    
    
]

const Categories =() => (
    <>   
        <ProductsList roupas={fitness} title="FITNESS" background="Rose" />
        <ProductsList roupas={fitness} title="" background="concha" />
        <ProductsList roupas={intima} title="ÍNTIMA" background="Rose" />
        <ProductsList roupas={intima} title="" background="concha" />
    </>
)

export default Categories