import styles from "./style.module.css"

export default function Headline(){
    return(
        <div className={styles.head}>
            <h1 className={styles.tag}>Style Module Project</h1>
            <br></br>
            <h3 className={styles.text}>Descrição do Projeto</h3>
            <div className={styles.containerbutton}>
            <button>Tag One</button>
            <button>Tag Two</button>
            <button>Tag Three</button>
            </div>
            <div className={styles.image}>
                <img src="https://tse1.mm.bing.net/th/id/OIG1.xFmHorVc7mcek9Y4uLR1?pid=ImgGn," alt="" />
            </div>

        </div>
       
    )
}