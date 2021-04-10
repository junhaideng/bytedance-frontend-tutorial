import dateFormat from "../../utils/dateFormat";

interface  data{
    source: string,
    title: string,
    is_stick: boolean,
    comment_count: number,
    datetime: string,
    image_list: Array<any>,
}

interface Props{
    data: data
}

// 含有多张图片的新闻
export default function SectionImageList(props: Props){
    const {data} = props
    return <section className="has_action">
        <a className="article_link clearfix ">
        <div className="item_detail">
            <h3 className="dotdot line3">{data.title}</h3>
            <div className="list_image">
                <ul className="clearfix">
                    {data.image_list.map((item, index)=>
                        <li className="list_img_holder" key={index}>
                            <img src={item.url}/></li>
                    )}
                </ul>
            </div>
            <div className="item_info">
                <div>
                    <span className="src space">{data.source}</span>
                    <span className="cmt space">评论 {data.comment_count}</span>
                    <span className="time" title={data.datetime}>{dateFormat(data.datetime)}</span>
                    <span className="dislike-news fr"/></div>
            </div>
        </div>
    </a>
</section>
}
