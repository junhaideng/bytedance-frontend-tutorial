import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import Menu from "../components/Menu";
import Content from "../components/Content";
import Download from "../components/Download";
import Head from "next/head";

export default function Home() {
  return (
   <>
       <Head>
           <title>今日头条 - TouTiao.com</title>
           <meta charSet="utf-8"/>
           <link rel="shortcut icon" href="https://s3.pstatp.com/image/toutiao_mobile/short_cut_icon_1.png" type="image/x-icon"/>
       </Head>
       <div className={styles.container} style={{marginBottom: "50px"}}>
           <Header/>
           <Menu/>
           <Content/>
       </div>
       <Download/>
   </>
  )
}
