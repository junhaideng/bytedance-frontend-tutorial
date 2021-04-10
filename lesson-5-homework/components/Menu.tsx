import styles from "../styles/Menu.module.css"
export default function Menu() {
    return <>
        <div className={styles.top_menu_bar}>
            <div className={styles.top_menu_more}>
                <div className={styles.list_shadow}/>
                <a className={styles.more_btn} >
                    <span className={styles.cross}/>
                </a>
            </div>
            <div className={styles.top_menu_list}>
                <a   className={`${styles.btn} ${styles.cur}`}>推荐</a>
                <a   className={styles.btn}>视频</a>
                <a  className={styles.btn}>热点</a>
                <a  className={styles.btn}>社会</a>
                <a   className={styles.btn}>娱乐</a>
                <a  className={styles.btn}>军事</a>
                <a   className={styles.btn}>科技</a>
                <a   className={styles.btn}>汽车</a>
                <a  className={styles.btn}>房产</a>
                <a   className={styles.btn}>家居</a>
                <a  className={styles.btn}>体育</a>
                <a   className={styles.btn}>财经</a></div>
        </div>
    </>
}
