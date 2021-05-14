import React from "react";
import Rate from "../common/Rate";
import styles from "../../styles/deal/FeedBackItem.module.css"
import { feedbackItem } from "./interface";

// 每一条反馈信息
export default function FeedBackItem(props: feedbackItem) {
    const { score, src, name, des, time } = props
    return <div className={styles.feedback_list_item}>
        {/* 头像 */}
        <div className={styles.feedback_list_item_avatar}>
            <img src={src} alt={name} />
        </div>
        <div className={styles.feedback_list_item_content}>
            <div className={styles.feedback_list_item_content_title}>
                <div className={styles.feedback_list_item_content_title_name}>
                    {/* 用户名 */}
                    <span className={`${styles.hue_base_flex_item} ${styles.name}`}>
                        {name}
                    </span>
                    {/* 时间 */}
                    <span className={styles.time}>{time}</span>
                </div>
                <div className={styles.feedback_list_item_content_title_score}>
                    <span className={styles.action}>打分</span>
                    {/* 评分 */}
                    <Rate score={score} show={false} />
                </div>
            </div>
            {/* 反馈内容 */}
            <div className="feedback-list-item-content-des">{des}</div>
        </div>
    </div>
}
