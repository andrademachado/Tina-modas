import { title } from "process"
import ProductsList from "../../components/ProductList"

import conjuntoCountry from '../../assets/images/conjuncountry.jpg'
import menino from '../../assets/images/menino.jpg'
import evangelica from '../../assets/images/evangelica.jpg'
import menino02 from '../../assets/images/menino02.jpg'
import menina01 from '../../assets/images/menina01jpg.jpg'
import menina02 from '../../assets/images/menina02.jpg'
import Roupa from "../../models/Roupa"
import Anuncio from "../../components/Anuncio"

const blusas: Roupa[] =[
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

const shorts: Roupa[] =  [
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
        category: 'Feminino',
        description: 'Branco',
        title: 'CAMISA PRETA',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: menina02,
    }
]

const calças: Roupa[] = [
    {
        id: 9,
        category: 'Feminino',
        description: 'Branco',
        title: 'Conjunto country',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: conjuntoCountry,
    },
    {
        id: 10,
        category: 'INFANTIL',
        description: 'Camisa Polo Verde',
        title: 'CAMISA',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: menino,
    },

    {
        id: 11,
        category: 'EVANGELICA',
        description: 'Vestido Floral Azul',
        title: 'VESTIDO FLORAL',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: evangelica,
    },
    {
        id: 12,
        category: 'EVANGELICA',
        description: 'Vestido Floral Azul',
        title: 'VESTIDO FLORAL',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: evangelica,
    }
    
]

const saias: Roupa[] = [
    {
        id: 13,
        category: 'INFANTIL',
        description: 'Branco',
        title: 'CAMISA BRANCA',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: menino02,
    },
    {
        id: 14,
        category: 'Feminino',
        description: 'Branco',
        title: 'CAMISA ROSA',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: menina01,
    },
    {
        id: 15,
        category: 'Feminino',
        description: 'Branco',
        title: 'CAMISA PRETA',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: menina02,
    },
    {
        id: 16,
        category: 'Feminino',
        description: 'Branco',
        title: 'CAMISA PRETA',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: menina02,
    }
]

const vestidos: Roupa[] = [
    {
        id: 17,
        category: 'INFANTIL',
        description: 'Branco',
        title: 'CAMISA BRANCA',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: menino02,
    },
    {
        id: 18,
        category: 'Feminino',
        description: 'Branco',
        title: 'CAMISA ROSA',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: menina01,
    },
    {
        id: 19,
        category: 'Feminino',
        description: 'Branco',
        title: 'CAMISA PRETA',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: menina02,
    },
    {
        id: 20,
        category: 'Feminino',
        description: 'Branco',
        title: 'CAMISA PRETA',
        system: 'P,M,G ,GG',
        infos: [' 10% ', ' R$ 250,00  '],
        image: menina02,
    }
]

const Feminino =() => (
    <>
        <Anuncio />
        <ProductsList roupas={blusas} title="BLUSAS" background="Rose" />
        <ProductsList roupas={shorts} title="SHORTS" background="concha" />
        <ProductsList roupas={calças} title="CALÇAS" background="Rose" />
        <ProductsList roupas={saias} title="SAIAS" background="concha" />
        <ProductsList roupas={vestidos} title="VESTIDOS" background="Rose" />
    </>
)

export default Feminino