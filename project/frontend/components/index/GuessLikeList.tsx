import React from "react";
import styles from "../../styles/index/GuessLinkList.module.css"
import Image from "next/image"
import { LikeItem } from "./interface";

interface Props {
    data: Array<LikeItem>
}

class GuessLikeList extends React.Component<Props, any> {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props
        return (
            <div className={styles.guess_like}>
                <ul className={styles.list} style={{ opacity: 1 }}>
                    <li>
                        <ul className={styles.list}>
                            <li className={styles.guess_like_title}>猜你喜欢</li>
                            {/* 产品信息 */}
                            {data.map((item, index) => <li key={index}>
                                <a href={`deal/${item.deal_id}`}
                                    className={styles.react}>
                                    <div className={styles.dealcard} data-did={item.deal_id}>
                                        <div className={`${styles.dealcard_img} ${styles.imgbox}`}>
                                            {/*使用Image组件性能会得到进一步的提升*/}
                                            <Image src={item.img} alt={item.title} height={"100%"} width={"100%"}
                                                layout={"responsive"} />
                                        </div>

                                        <div className={styles.dealcard_block_right}>
                                            {/* 品牌 */}
                                            <div className={`${styles.dealcard_brand} ${styles.single_line}`}>
                                                    {item.brand}
                                            </div>
                                            {/* 产品名称 */}
                                            <div className={`${styles.title} ${styles.text_block}`}>{item.title}</div>
                                            <div className={styles.price}>
                                                {/* 产品价格 */}
                                                <span className={styles.strong}>{item.price}</span>
                                                <span className={styles.strong_color}>元</span>
                                                {/* 原价 */}
                                                <del>{item.ori_price}</del>
                                                {/* 卖出的数量 */}
                                                <span className={styles.line_right}>{item.sold}</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>)}
                        </ul>
                    </li>
                    <li className={styles.li}>
                        <a className={styles.react} href="https://i.meituan.com/shanghai/all/">
                            <div className={styles.more}>查看全部团购</div>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default GuessLikeList
