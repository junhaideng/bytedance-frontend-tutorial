import React from "react";
import styles from "../../styles/deal/PurchaseDetail.module.css"
import {purchaseNote} from "./interface";

interface Props {
    notes: Array<purchaseNote>
}

// 购买须知部分
export default function PurchaseDetail(props: Props) {
    const {notes} = props;
    return <div className={styles.detail_note}>
        <div className={styles.detail_note_title}>购买须知</div>
        <div className={styles.detail_note_content}>
            {/* 购买须知所有信息 */}
            {notes.map((note, index) => <div key={index} className={styles.detail_purchase_note}>
                    <p className={styles.detail_purchase_note_title}> {note.title} </p>
                    {/* note中的内容可能有多条 */}
                    {note.content.map(((value, index1) =>
                        <ul className={styles.detail_purchase_note_content} key={index1}>
                            <li> {value}</li>
                        </ul>))}

                </div>
            )}
        </div>
    </div>
}
