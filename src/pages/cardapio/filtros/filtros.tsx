import filtros from './filtros.json';
import styles from './filtros.module.scss';

interface FiltrosProps{
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

function Filtros(props: FiltrosProps){

    function selecionarFiltro(opcao: { label: string; id: number; }){
        if(props.filtro == opcao.id){
            return props.setFiltro(null);
        }
        return props.setFiltro(opcao.id);
    }

    return(
        <div className={styles.filtros}>
            {filtros.map(opcao => (
                <button 
                    className={`${styles.filtros__filtro} ${props.filtro === opcao.id ? styles["filtros__filtro--ativo"] : ""}`} 
                    key={opcao.id} 
                    onClick={() => selecionarFiltro(opcao)}
                >
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}
export default Filtros;
