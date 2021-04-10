interface  data{
    source: string,
    title: string,
    is_stick: boolean,
    comment_count: number,
    datetime: string,
    large_image_url: string,
}

interface Props{
    data: data
}

// 只有一张图片的新闻
export default function SectionOneImage(props: Props){
    const {data} = props
    return <section className="middle_mode has_action">
            <a className="article_link clearfix ">
            <div className="item_detail desc">
                <h3 className="dotdot line3 image-margin-right">{data.title}</h3>
                <div className="item_info">
                    <div>
                        <span className="src space">{data.source}</span>
                        <span className="cmt space">评论 {data.comment_count}</span>
                        <span className="dislike-news fr mid-space"/></div>
                    </div>
            </div>
            <div className="list_img_holder">
                <img src={data.large_image_url} alt={data.title}/>
                <span className="video-btn"/>
            </div>
        </a></section>
}
