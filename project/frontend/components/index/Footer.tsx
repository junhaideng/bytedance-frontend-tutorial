import React from "react";
import styles from "../../styles/index/Footer.module.css"

interface Props {
    city: string,
}

// 页脚数据
class Footer extends React.Component<Props, any> {
    constructor(props) {
        super(props);
    }

    render() {
        const { city } = this.props;
        return <footer>
            <div className={styles.footer_bar}>
                <div className={styles.pull_right}>
                    <span className={styles.m_city}>城市:</span>
                    <img src="/local.png"
                        className={styles.icn_local} alt={"local"} />
                    <a href="/index/changecity/"
                        className={`${styles.btn} ${styles.city_name_a}`}>{city}</a>
                </div>
                <a href="/account/login" className={`${styles.btn} ${styles.btn_login}`}
                    rel="nofollow" data-backurl="true">登录</a>
                <span className={styles.space} />
                <a href="/account/signup" className={`${styles.btn} ${styles.btn_reg}`} rel="nofollow"
                    data-backurl="true">注册</a>

            </div>
            {/* 页脚导航 */}
            <div className={styles.footer_nav}>
                <ul>
                    <li><a className={styles.react} href="//i.meituan.com/">首页</a>
                    </li>
                    <li><a className={styles.react} rel="nofollow"
                        href="/account">我的</a>
                    </li>
                    <li><a className={styles.react} href="/client" >美团下载</a>
                    </li>
                    <li><a className={styles.react} href="/?pcstyle=1">电脑版</a>
                    </li>
                    <li><a className={styles.react} rel="nofollow" href="/help">帮助</a>
                    </li>
                </ul>
            </div>
            {/* 友情链接部分 */}
            <div className={styles.footer_links}>友情链接：
                <a target="_blank" rel={"noreferrer"}
                    href="https://m.maoyan.com/?channel=touch_group">猫眼电影</a>
                <a target="_blank" rel={"noreferrer"} href="//m.dianping.com">大众点评</a>
                <a target="_blank" rel={"noreferrer"}
                    href="https://i.meituan.com/awp/hfe/hotel-fe-itower_awp/journey/guide-download/index.html?refer_source=yqlj">美团旅行</a>
                <a target="_blank" rel={"noreferrer"} href="//i.zhenguo.com">榛果民宿</a>
                <a target="_blank" rel={"noreferrer"}
                    href="https://evt.dianping.com/synthesislink/9496.html">大众点评下载</a>
                <a target="_blank" rel={"noreferrer"}
                    href="https://shouyin.meituan.com?utm_source=inner&amp;utm_medium=mti ">美团收银官网</a>
                <a target="_blank" rel={"noreferrer"}
                    href="https://xue.meituan.com/?from=mt0">美团大学·餐饮学院</a>
                <a target="_blank" rel={"noreferrer"}
                    href="https://www.kuailvzaixian.com/">快驴进货商家合作</a>
            </div>
            {/* 版权信息 */}
            <div className={styles.footer_copyright}>
                <div className={styles.hr} />
                <span className={styles.footer_copyright_text}>©2021 美团网 <a href="http://www.beian.miit.gov.cn/"
                    target="_blank"
                    rel={"noreferrer"}>京ICP证070791号</a></span>
            </div>
        </footer>
    }
}

export default Footer
