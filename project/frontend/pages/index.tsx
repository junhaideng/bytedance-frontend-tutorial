import Head from "next/head"
import Header from "../components/index/Header";
import Banner from "../components/index/Banner";
import List from "../components/index/List";
import GuessLikeList from "../components/index/GuessLikeList";
import Footer from "../components/index/Footer";
import React from "react";

// 首页内容，支持SSR
export default function Home({data}) {
    return (
        <>
            {/*头部*/}
            <Head>
                <title>美团</title>
                {/*图片的链接域名*/}
                <link href="https://p0.meituan.net" rel="dns-prefetch"/>
                <link href="https://p1.meituan.net" rel="dns-prefetch"/>
                <link rel="preload" as={"font"} href="/iconfont.woff" type={"font/woff"} crossOrigin={"true"}/>
                <meta name={"description"} content="首页内容"/>
                <meta name="viewport" content="initial-scale=1, width=device-width, maximum-scale=5"/>
            </Head>
            <Header city={"上海"}/>
            <Banner/>
            {/*图标list*/}
            <List/>
            {/*猜你喜欢的数据*/}
            <GuessLikeList data={data}/>
            {/*尾部信息*/}
            <Footer city={"上海"}/>
        </>
    )
}

// 从服务端获取到数据，传递给组件的props，以支持SSR
export async function getServerSideProps(context) {
    let data;
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/guess-like-list`)
        data = await res.json()
    } catch (e) {
        return {
            props: {
                data: []
            }
        }
    }
    return {
        props: {data: data.data}, // will be passed to the page component as props
    }
}
