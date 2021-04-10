import React from "react";
import styles from "../styles/Header.module.css"

// 头部限制今日头条
export default function Header(){
    return <header id="indexHeader" className={styles.toutiaoribao}>
        <div className={styles.top_bar}>
            <div className={styles.abs_m}>
                <a href="#" className={`${styles.refresh_title}`}/>
                <div className={styles.refresh_btn_container}><i className={styles.refresh_btn}/></div>
            </div>
            <div className={styles.abs_l}><a href="" className={styles.msg_box}>
                <div className={styles.circle}/>
            </a></div>
            <div className={styles.abs_r}><a href="https://so.toutiao.com/?need_open_window=1" className={styles.search}/>
            </div>
        </div>
    </header>
}
