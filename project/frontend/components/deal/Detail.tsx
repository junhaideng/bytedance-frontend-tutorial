import React from "react";
import styles from "../../styles/deal/Detail.module.css"
import Rate from "../common/Rate";
import {rating, tag} from "./interface";

export interface Props {
    src: string,
    tags: Array<tag>,
    price: number,
    sold: number
    rating: rating,
    title: string
}

// 产品的信息
export default function Detail(props: Props) {
    const {src, tags, price, sold, rating, title} = props
    return <div>
        {/*图片*/}
        <div className={styles.detail_header}>
            <img className={styles.header_image} src={src} alt={""}/>
            {/*<Image className={styles.header_image} src={this.props.src} width={"100%"} height={"100%"} layout={"intrinsic"}/>*/}
            <span className={styles.detail_header_album}> <i className={styles.photo_icon}/> 1张 </span>
        </div>
        {/*基本信息*/}
        <div className={styles.detail_base_info}>
            <div className={styles.detail_base_info_content}>
                <div className={styles.detail_base_info_content_title}><p
                    className={styles.detail_base_info_content_title_content}> {title}</p></div>
                <div className={styles.detail_base_info_content_price}><span
                    className={`${styles.hue_base_flex_item} ${styles.price}`}> <strong><span
                    className={styles.price_unit}>¥</span>{price}</strong> <span
                    className={styles.value_price}>门市价:¥{price}</span> </span> <span
                    className={styles.sold}>已售{sold}</span></div>
            </div>
            <div className={styles.detail_base_info_more}>
                {tags.map((tag, index) => <span key={index} className={styles.detail_base_info_more_tag}>
                    <i className={styles.tag_sure}/>
                        <span>{tag.title}</span>
                    </span>)}
            </div>
        </div>
        {/* 星级*/}
        <div className={`${styles.detail_score} ${styles.hue_base_arrow_right}`}>
            <Rate score={Number.parseFloat(rating?.rating)}/>
            <span className={styles.detail_score_count}>{rating?.count}条评论</span></div>
    </div>
}
