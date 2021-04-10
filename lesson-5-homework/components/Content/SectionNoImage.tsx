import dateFormat from "../../utils/dateFormat";

interface data{
    is_stick: boolean,
    title: string,
    source: string,
    comment_count: number,
    datetime: string
}
interface Props{
    data: data
}

// 纯文本的新闻
export default function SectionNoImage(props:Props) {
    const data = props.data
    return <section className="has_action">
        <a className="article_link clearfix">
        <div className="item_detail">
            <h3 className="dotdot line3">{data.title}</h3>
            <div className="item_info">
                <div>
                    {data.is_stick? <span className="stick_label space">置顶</span> :""}
                    <span className="src space">{data.source}</span>
                    <span className="cmt space">评论 {data.comment_count}</span>
                    <span className="time" title={data.datetime}>{dateFormat(data.datetime)}</span>
                    <span className="dislike-news fr"/></div>
            </div>
        </div>
    </a></section>
}
