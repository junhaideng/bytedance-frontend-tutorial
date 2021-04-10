import React from "react";
import SectionNoImage from "./Content/SectionNoImage";
import SectionOneImage from "./Content/SectionOneImage";
import SectionImageList from "./Content/SectionImageList";

interface State {
    data: Array<any>
}

// 新闻内容
export default class Content extends  React.Component<any, State>{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    // 获取到所有的数据
    componentDidMount() {
        fetch("/api/news-list").then(res=>{
            res.json().then(res=>{
                this.setState({
                    data: res.data
                })
            })
        })
    }

    render() {
        const {data} = this.state;
        return <>
            {/*根据不同的信息构造不同的显示模型*/}
            {data.map((item, index)=>{
                return item.has_image?(item.large_image_url ? <SectionOneImage data={item} key={index}/>:<SectionImageList data={item} key={index}/>): <SectionNoImage data={item} key={index}/>
            })}
        </>
    }
}

