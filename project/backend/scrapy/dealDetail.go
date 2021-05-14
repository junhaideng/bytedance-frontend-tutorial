package scrapy

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

// api接口中获取到的产品数据，这里为了简单，仅设置下面的结构体
// 其中Data中是我们需要的返回给前端的数据
type Detail struct {
	Cost int             `json:"cost,omitempty"`
	Data json.RawMessage `json:"data,omitempty"`
}

// api接口
var url = "https://itrip.meituan.com/volga/api/v2/trip/i/deal/%s/detail"

// 根据所给的条件创建请求
func buildRequest(method, url string, header http.Header, body io.Reader) (*http.Request, error) {
	req, err := http.NewRequest(method, url, body)
	if err != nil {
		return nil, err
	}
	// 设置请求头
	req.Header = header
	return req, nil
}

// 爬取数据
func GetDealDetail(id string) (*Detail, error) {
	header := http.Header{}
	// 添加头部参数
	header.Add("Host", "itrip.meituan.com")
	header.Add("Cookie", "iuuid=E189B46ACF6C833E99B8D1EED20097165CF0E0CC394D792AFD1C22E86A14BFDE;")
	header.Add("User-Agent", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1")
	// 根据所给的id参数创建Request
	req, err := buildRequest("GET", fmt.Sprintf(url, id), header, nil)
	if err != nil {
		fmt.Println("err: ", err)
		return nil, err 
	}
	var client http.Client
	// 发起请求
	res, err := client.Do(req)
	if err != nil {
		fmt.Println("err: ", err)
		return nil, err 
	}
	// 延迟关闭
	defer res.Body.Close()
	data := Detail{}
	// 将数据反序列到data中
	err = json.NewDecoder(res.Body).Decode(&data)
	if err != nil {
		return nil , err
	}

	return &data, nil 
}
