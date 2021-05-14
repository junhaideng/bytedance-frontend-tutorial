import React from "react";
import styles from "../../styles/index/List.module.css"

// 产品分类导航
export default function List() {
    return (
        <ul className={`${styles.list} ${styles.list_in}`}>
            <li className={styles.icon_wrapper}>
                <ul className={`${styles.icon_list} ${styles.page} ${styles.current}`}>
                    <li className={styles.icon}>
                        <a href="https://meishi.meituan.com/i/?ci=10">
                            <span className={`${styles.new_icon_circle} iconfont meishi`} />
                            <span className={styles.icon_desc}>美食</span></a>
                    </li>
                    <li className={styles.icon}>
                        <a href="https://m.maoyan.com/imeituan/?_v_=yes&amp;my_traffic_sources=group&amp;ci=10">
                            <span className={`${styles.new_icon_circle} iconfont dianying`} />
                            <span className={styles.icon_desc}>猫眼电影</span></a>
                    </li>
                    <li className={styles.icon}>
                        <a href="https://i.meituan.com/awp/h5/hotel/search/search.html" data-stid_b="1">
                            <span className={`${styles.new_icon_circle} iconfont jiudian`} />
                            <span className={styles.icon_desc}>酒店</span></a>
                    </li>
                    <li className={styles.icon}>
                        <a href="https://i.meituan.com/shanghai/all/?cid=2&amp;cateType=poi">
                            <span className={`${styles.new_icon_circle} iconfont xiuxianyule`} />
                            <span className={styles.icon_desc}>休闲娱乐</span></a>
                    </li>
                    <li className={styles.icon}>
                        <a href="https://openapi.waimai.meituan.com/openh5/entrance?type=main_page&amp;utm_source=60030&amp;channel=mtib">
                            <span className={`${styles.new_icon_circle} iconfont waimai`} />
                            <span className={styles.icon_desc}>外卖</span></a>
                    </li>
                    <li className={styles.icon}>
                        <a href="https://i.meituan.com/shanghai/all/?cid=10&amp;cateType=poi">
                            <span className={`${styles.new_icon_circle} iconfont ktv`} />
                            <span className={styles.icon_desc}>KTV</span></a>
                    </li>
                    <li className={styles.icon}>
                        <a href="https://i.meituan.com/trip/lvyou/triplist/poi/">
                            <span className={`${styles.new_icon_circle} iconfont zhoubianyou`} />
                            <span className={styles.icon_desc}>周边游</span></a>
                    </li>
                    <li className={styles.icon}>
                        <a href="/catehome/22">
                            <span className={`${styles.new_icon_circle} iconfont liren`} />
                            <span className={styles.icon_desc}>丽人</span></a>
                    </li>
                    <li className={styles.icon}>
                        <a href="https://i.meituan.com/shanghai/all/?cid=36&amp;cateType=poi">
                            <span className={`${styles.new_icon_circle} iconfont xiaochikuaican`} />
                            <span className={styles.icon_desc}>小吃快餐</span></a>
                    </li>
                    <li className={styles.icon}>
                        <a href="https://i.meituan.com/category?city=shanghai">
                            <span className={`${styles.new_icon_circle} iconfont quanbu`} />
                            <span className={styles.icon_desc}>全部分类</span></a>
                    </li>
                </ul>
                <ul className={`${styles.list_ico} ${styles.list}`}>
                </ul>
            </li>
        </ul>
    )
}