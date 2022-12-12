import styles from './cardapio.module.scss';
//import logo from '../../assets/logo.svg'; //importa uma imagem como tipo de arquivo imagem
import {ReactComponent as Logo} from 'assets/logo.svg'; //esse comando converte um arquivo svg em um componente react
import Buscador from './buscador/buscador';
import { useState } from 'react';
import Filtros from './filtros/filtros';
import Ordenador from './ordenador/ordenador';
import Itens from './itens/itens';
//observe que o caminho do import da logo é dado a partir da pasta src devido a adição do "baseUrl": "src" no arquivo tsconfig.jason

function Cardapio(){
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState("");

    return(
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}> {/*o nome da classe header__text significa que tem um text dentro do header */}
                    A casa do código e da massa
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca}/> 
                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro}/>
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
                    <Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
                </div>
            </section>
        </main>
    )
}
export default Cardapio;