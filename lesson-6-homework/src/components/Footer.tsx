import styles from "../styles/Footer.module.css"

interface item {
    img: string
    title: string,
    artist: string,
}

interface Props {
    className?: string
    cur: item
}
// 底部播放界面
export default function Footer(props: Props) {
    if (!props.cur) {
        return <></>
    }
    const {className} = props;
    return <footer className={`${className? className: ""} ${styles.footer}`}>
        <section className={styles.music}>
            <img src={props.cur.img} alt="album art"/>
            <div className={`${styles.info} hide`}>
                <p className={styles.title}>{props.cur.title}</p>
                <p className={styles.artist}>{props.cur.artist}</p>
            </div>
        </section>
        <div className={styles.controls}>
            <i className="fa fa-step-backward"/>
            <i className="fa fa-pause"/>
            <i className="fa fa-step-forward"/>
            <i className={`fa fa-repeat hide`}/>
            <i className={`fa fa-random hide`}/>
        </div>
    </footer>
}
