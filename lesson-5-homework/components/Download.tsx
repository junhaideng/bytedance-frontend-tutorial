import styles from "../styles/Download.module.css"

export default function Download(){
    return   <div className={styles.sdk_container}>
            <a href="https://d.toutiao.com/N13p/" target="_self" className={styles.download} rel="nofollow">
                <div className={styles.logo_wrapper}>
                    <div className={styles.logo}/>
                    <div className={styles.banner_label}>
                        <p>今日头条</p>
                    </div>
                </div>
                <div className={styles.open}>打开</div>
            </a>
        </div>
}
