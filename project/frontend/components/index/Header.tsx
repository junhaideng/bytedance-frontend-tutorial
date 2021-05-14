import React from "react";
import styles from "../../styles/index/Header.module.css"

interface Props {
    city: string
}

interface State {
}

class Header extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    render() {
        const {city} = this.props;
        return <header className={styles.navbar}>
            {/* 地理位置 */}
            <div className={styles.nav_wrap_left}>
                <a href={""} className={styles.react}>
                    <span className={styles.nav_city}>
                        {city}
                        <span className={styles.space}/>
                        <img src="/down-arrow.png"
                             className={styles.icn_down} alt={"down-arrow"}/>
                    </span>
                </a>
            </div>
            {/* 搜索框 */}
            <div className={styles.box_search}>
                <a className={styles.react} href={""}>
                    <img src="/search.png"
                         className={styles.icn_search} alt={"search-icon"}/>
                    <span className={styles.single_line}>
	                    			&nbsp;请输入商家名、品类或者商圈...
	                    	</span>
                </a>
            </div>
            {/* 用户 */}
            <div className={styles.nav_wrap_right}>
                <a className={styles.react} rel="nofollow">
                    <span className={styles.nav_btn}>
                        <img src="/user.png"
                             className={styles.icn_mine} alt={"user"}/>
                    </span>
                </a>
            </div>
        </header>;
    }
}

export default Header
