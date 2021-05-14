import React from "react";
import styles from "../../styles/index/Banner.module.css"

interface Props {
    show?: boolean
}

class Banner extends React.Component<Props, any> {
    static defaultProps = {
        show: true,
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { show } = this.props
        return <>
        {/* 美团手机app banner */}
            {show ? <div className={styles.banner_download}>
                <div className={styles.banner_item}>
                    <img src="https://p1.meituan.net/travelcube/7264ce9c25de2e464e3acd996fe8ad362803.png"
                        className={styles.img_box} alt={"banner"} />
                    <div className={styles.logo_theme}>
                        <p className={styles.logo_tit}>省钱利器 购物超划算</p>
                        <p className={styles.logo_desc}>吃喝玩乐尽在美团</p>
                    </div>
                </div>
                <div className={styles.to_app_btn}>
                    <span className={styles.call_app_btn}>去APP</span>
                </div>
            </div> : ""}</>
    }
}


export default Banner
