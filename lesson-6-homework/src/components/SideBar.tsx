import styles from "../styles/SideBar.module.css"

interface Props {
    className?: string
}

// 侧边栏，这里使用font-awesome 中的图标
export default function SideBar(props: Props) {
    const {className} = props;
    return <div className={`${className? className: ""} hide ${styles.side_bar} `}>
        <i className="fa fa-bars"/>
        <i className="fa fa-home"/>
        <i className="fa fa-search"/>
        <i className="fa fa-volume-up"/>
        <i className="fa fa-user"/>
        <i className="fa fa-spotify"/>
        <i className="fa fa-cog"/>
        <i className="fa fa-soundcloud"/>
    </div>
}
