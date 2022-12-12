import styles from './buscador.module.scss';
import {CgSearch} from 'react-icons/cg'

interface BuscadorProps{
    busca: string;
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

function Buscador(props: BuscadorProps){
    return(
        <div className={styles.buscador}>
            <input 
                type="text"
                placeholder="Buscar"
                value={props.busca}
                onChange={event => props.setBusca(event.target.value)} 
            />
            <CgSearch size={20} color="#4C4D5E"/> {/*CgSearch é um componente que vem de um pacote de icons instalado no terminal pelo comando npm install react-icons */}
        </div>
    )
}
export default Buscador;