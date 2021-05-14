import React from "react";
import FeedBackItem from "./FeedBackItem";
import styles from "../../styles/deal/FeedBack.module.css"
import { feedbackItem } from "./interface";

interface Props {
    total: number,
    data: Array<feedbackItem>
}


// 反馈信息列表
export default function FeedBack(props: Props) {
    const {total, data} = props
    return <div className={styles.feedback}>
        <div className={styles.feedback_title}>用户评价({total})</div>
        <div className={styles.feedback_list}>
            {/* 反馈内容 */}
            {data.map((item, index) =>
                <FeedBackItem {...item} key={index}/>
            )}
        </div>
        <div className={styles.feedback_more}>查看全部{total}条评价</div>
        <div className={styles.feedback_bottom_space}/>

    </div>
}
