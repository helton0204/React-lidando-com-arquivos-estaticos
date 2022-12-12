import { useEffect, useState } from 'react';
import Item from './item/item';
import cardapio from './itens.json';
import styles from './itens.module.scss';

interface ItensProps{
    busca: string;
    filtro: number | null;
    ordenador: string;
}

function Itens(props: ItensProps){
    const [lista, setLista] = useState(cardapio);

    function testaBusca(title: string){
        const regex = new RegExp(props.busca, "i"); //'i' significa case insensitive
        return regex.test(title); //vai pesquisar se o parâmetro title é igual a props.busca 
    }

    function testaFiltro(id: number){
        if(props.filtro !== null){
            return props.filtro === id;
        }
        return true;
    }

    function ordenar(novaLista: typeof cardapio){
        switch(props.ordenador){
            case "porcao":
                return novaLista.sort((item1, item2) => item1.size > item2.size ? 1 : -1);
            case "qtd_pessoas":
                return novaLista.sort((item1, item2) => item1.serving > item2.serving ? 1 : -1);
            case "preco":
                return novaLista.sort((item1, item2) => item1.price > item2.price ? 1 : -1);
            default:
                return novaLista;
        }
    }

    useEffect(() => {
        const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
        setLista(ordenar(novaLista));
    }, [props.busca, props.filtro, props.ordenador])

    return (
        <div className={styles.itens}>
            {lista.map(item => (
                <Item key={item.id} {...item}/> //...item passa todas as propriedades do objeto item como props do componente Item
            ))}
        </div>
    )
}
export default Itens;