import styles from "../styles/MusicList.module.css"

interface item {
    title: string,
    artist: string,
    duration: string,
    synced: boolean
}

interface Props {
    className?: string,
    data: Array<item>
}

// 音乐列表
export default function MusicList(props: Props) {
    const {className} = props;
    return <div className={`${className? className: ""} ${styles.music_list}`}>
        <ul>
            {/*渲染所有的数据*/}
            {props.data && props.data.map((item, index) =>
                <li key={index}>
                    <p>{index + 1}. {item.title}</p>
                    <p className={`${styles.music_artist} hide`}>{item.artist}</p>
                    <p className={styles.music_duration}>{item.duration}</p>
                    <p className={`${styles.music_sync} hide`}><span
                        className={styles.catty_cloud}>{item.synced ? "CATTY CLOUD SYNC" : "FROM LOCAL"}</span></p>
                </li>
            )}
        </ul>
    </div>
}
