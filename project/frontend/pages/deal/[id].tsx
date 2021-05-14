import React from "react";
import Header from "../../components/deal/Header";
import Detail from "../../components/deal/Detail";
import PurchaseDetail from "../../components/deal/PurchaseDetail";
import PositionDetail from "../../components/deal/PositionDetail";
import Footer from "../../components/deal/Footer";
import FeedBack from "../../components/deal/FeedBack";
import Head from "next/head";
import { feedbackItem, position, purchaseNote } from "../../components/deal/interface";
import { Props as DetailProps } from "../../components/deal/Detail";

// 模拟用户评论，也可以爬取进行获取
const comments = [
    {
        src: "data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXs7Oxc9QatAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==",
        score: 5,
        name: "用户一",
        des: "挺好的，就是人比较多",
        time: "2021-5-14"
    },
    {
        src: "data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXs7Oxc9QatAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==",
        score: 4.2,
        name: "用户二",
        des: "冲冲冲",
        time: "2021-5-14"
    }
]

// 路由中的参数
interface Props {
    // url参数中对应的id
    id: string,
    // 传递给Detail组件的数据
    detailProps: DetailProps,
    // 总评价人数
    total: number,
    // 原价
    origin: number,
    // 评论内容
    comments: Array<feedbackItem>,
    // 位置信息
    position: position,
    // 购买须知
    notes: Array<purchaseNote>,
}

export default function Deal(props: Props) {
    const { comments, total, origin, position, notes, detailProps } = props
    return <>
        <Head>
            <title>产品详情</title>
            <meta name="description" content="产品详情页" />
            <meta name="viewport" content="initial-scale=1, width=device-width, maximum-scale=5" />
        </Head>
        {/*头部*/}
        <Header />
        {/*详细信息，比如说介绍图片，价格，基本信息等*/}
        <Detail {...detailProps} />
        {/*购买信息*/}
        <PurchaseDetail notes={notes} />
        {/*位置信息*/}
        <PositionDetail location={position.location} provider={position.provider} />
        {/*用户反馈*/}
        <FeedBack total={total} data={comments} />
        {/*尾部信息*/}
        <Footer origin={origin} price={detailProps.price} />
    </>
}

// SSR
export async function getServerSideProps(context) {
    // 默认props
    const defaultProps = {
        comments: [],
        detailProps: {
            src: "",
            tags: [],
            price: 0,
            sold: 0,
            rating: {},
            title: "",
        },
        notes: [],
        total: 0,
        origin: 0,
        position: {},
        tags: [],
    }
    let data;
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/deal-detail?id=${context.query.id}`)
        data = (await res.json()).data.data
    } catch (e) {
        return {
            props: defaultProps
        }
    }
    // 如果返回的数据为空，一般因为对应的id并不是旅游相关的订单
    // 可能是团购的
    if (Object.keys(data).length == 0) {
        return {
            props: defaultProps
        }
    }
    // 爬取api获取到的内容，这里简单分类一下
    return {
        props: {
            notes: data.buynotes ? data.buynotes : null,
            detailProps: {
                src: data.picList && data.picList[0]?.pic,
                tags: data.detailTags,
                price: data.price,
                sold: data.solds,
                rating: data.rating,
                title: data.title
            },
            comments: comments,
            total: data.rating ? data.rating.count : 0,
            origin: data.value ? data.value : 0,
            position: {
                location: data.rdploc && data.rdploc[0],
                provider: data.provider
            },
        },
    }
}

