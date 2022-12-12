import logo from 'assets/logo.svg';
import styles from './item.module.scss';

interface ItemProps{
    title: string;
    description: string;
    photo: string;
    size: number;
    serving: number;
    price: number;
    id: number;
    category: {id: number, label: string};
}

function Item(props: ItemProps){
    const {title, description, category, size, serving, price, photo} = props; 
    return(
        <div className={styles.item}>
            <div className={styles.item__image}>
                <img src={photo} alt={title} /> {/*para renderizar imagens de forma dinâmica, as imagens devem estar dentro da pasta public e o caminho da imagem deve ser relativo à pasta public..*/}
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={`${styles.item__tipo} ${styles[`item__tipo__${category.label.toLowerCase()}`]}`}>
                        {category.label}
                    </div>
                    <div className={styles.item__porcao}>
                        {size} g
                    </div>
                    <div className={styles.item__qtdpessoas}>
                        Serve {serving} {serving === 1 ? "pessoa" : "pessoas"}
                    </div>
                    <div className={styles.item__valor}>
                        R${price.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Item;