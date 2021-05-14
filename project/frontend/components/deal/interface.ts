// 定义的所有接口
// 主要目的是约束数据格式

// 产品提供商
export interface provider {
    title: string,
    serviceTime: string
}

// 产品位置信息
export interface location {
    name: string,
    phone: string,
    addr: string,
}

export interface position {
    provider?: provider,
    location?: location,
    distance?: string
}

// 评分
export interface rating {
    count: number,
    rating: string
}

// tag信息
export interface tag {
    title: string,
    type: number,
    color?: string,
    content?: string
}

// 购买须知信息
export interface purchaseNote {
    content: Array<string>,
    pageType?: string,
    title: string,
    type?: string
}

// 反馈数据信息
export interface feedbackItem {
    src: string,
    name: string,
    score: number,
    time: string,
    des?: string,
}