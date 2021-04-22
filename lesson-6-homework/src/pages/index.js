import Head from 'next/head'
import styles from "../styles/Home.module.css"
import SideBar from "../components/SideBar";
import MusicList from "../components/MusicList";
import {useEffect, useState} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

// 模拟的数据，事实上可以通过网络请求获取
const data = [
    {
        img: "cattyboard.jpg",
        title: "One Dance",
        artist: "Crake feat CatKid & Cyla",
        duration: "2:54",
        synced: true,
    },
    {
        img: "cattyboard.jpg",
        title: "Panda",
        artist: "Cattee",
        duration: "4:06",
        synced: true,
    },
    {
        img: "cattyboard.jpg",
        title: "Can't Stop the Feeling!",
        artist: "Catin Cimberlake",
        duration: "3:56",
        synced: true,
    },
    {
        img: "cattyboard.jpg",
        title: "Work From Home",
        artist: "Cat Harmony feat Colla",
        duration: "3:34 ",
        synced: true,
    }
]

export default function Home() {
    // 音乐列表
    const [musicList, setMusicList] = useState();
    // 当前播放的音乐
    const [cur, setCur] = useState();


    // 设置状态，可以在这模拟数据请求
    useEffect(() => {
        setMusicList(data)
        setCur(data[0])
    }, [])

    return (
        <>
            <Head>
                <title>Catty Music</title>
            </Head>
            {/*主要的内容*/}
            <div className={styles.container}>
                {/**/}
                <div className={styles.main}>
                    <SideBar/>
                    <div className={styles.content}>
                        {/*头部*/}
                        <Header/>
                        {/*所有的音乐列表*/}
                        <MusicList data={musicList}/>
                    </div>
                </div>
                {/*底部*/}
                <Footer cur={cur}/>
            </div>
        </>
    )
}
