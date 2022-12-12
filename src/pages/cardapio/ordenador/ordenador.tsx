import styles from './ordenador.module.scss';
import opcoes from './opcoes.json';
import { useState } from 'react';
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'; /*MdKeyboardArrowUp MdKeyboardArrowDown são componentes que vêm de um pacote de icons instalado no terminal pelo comando npm install react-icons */

interface OrdenadorProps{
    ordenador: string;
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

function Ordenador(props: OrdenadorProps){
    const [aberto, setAberto] = useState(false);
    const nomeOrdenador = opcoes.find(opcao => opcao.value === props.ordenador)?.nome; 

    return(
        <button 
            className={`${styles.ordenador} ${props.ordenador != "" ? styles["ordenador--ativo"] : ""}`} 
            onClick={() => setAberto(!aberto)}
            onBlur={() => setAberto(false)} //no evento onBlur, sempre que for clicado fora do elemento em questão, nesse caso o button, a função interna do onBlur é disparada 
        >
            <span>{props.ordenador ? nomeOrdenador : "Ordenar por"}</span>
            
            {aberto ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>} {/*MdKeyboardArrowUp e MdKeyboardArrowDown são componentes que vêm de um pacote de icons instalado no terminal pelo comando npm install react-icons */}
            
            <div className={`${styles.ordenador__options} ${aberto ? styles["ordenador__options--ativo"] : ""}`}>
                {opcoes.map(opcao => (
                   <div 
                        className={styles.ordenador__option} 
                        key={opcao.value}
                        onClick={() => props.setOrdenador(opcao.value)}
                    >   
                        {opcao.nome}
                   </div> 
                ))}
            </div>
        </button>
    )
}
export default Ordenador;