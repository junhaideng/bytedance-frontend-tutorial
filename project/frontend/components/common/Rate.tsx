import styles from "../../styles/common/Rate.module.css";
import React from "react";

// 评分
// score控制评分高低，show控制是否显示评分数字
export default function Rate({score, show = true}) {
    return <span className={styles.hue_base_flex_item}>
        <span className={styles.hue_base_score}>
            <span className={styles.hue_base_score_top} style={{width: `${score * 20}%`}}>
            <i className={styles.hue_base_icon_base}>★</i>
            <i className={styles.hue_base_icon_base}>★</i>
            <i className={styles.hue_base_icon_base}>★</i>
            <i className={styles.hue_base_icon_base}>★</i>
            <i className={styles.hue_base_icon_base}>★</i>
        </span>
            <span className={styles.hue_base_score_bottom}>
            <i className={styles.hue_base_icon_base}>★</i>
            <i className={styles.hue_base_icon_base}>★</i>
            <i className={styles.hue_base_icon_base}>★</i>
            <i className={styles.hue_base_icon_base}>★</i>
            <i className={styles.hue_base_icon_base}>★</i>
        </span>
            {show ? <span className={styles.detail_score_num_count}>{score}分</span> : ""}
             </span>  </span>
}
