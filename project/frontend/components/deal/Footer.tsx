import React from "react";
import styles from "../../styles/deal/Footer.module.css"

interface Props {
    origin: number,
    price: number
}

export default function Footer(props: Props) {
    const { origin, price } = props
    return <div className={`${styles.detail_footer} ${styles.hue_component_bottom_fixed_button}`}>
        <div className={`${styles.hue_component_bottom_fixed_button_price} ${styles.hue_base_flex_item}`}>
            <p className={styles.hue_component_bottom_fixed_button_price_total}>
                {/* 现价 */}
                <strong>¥{price}</strong>
            </p>
            <p className={styles.hue_component_bottom_fixed_button_price_original}>
                {/* 原价 */}
                门市价：¥{origin}
            </p>
        </div>
        <button className={styles.hue_component_bottom_fixed_button_btn} type="button">在线预订</button>
    </div>
}
