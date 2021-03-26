package scraper

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func GetFeedList(MaxBehotTime int64) (*Response, error) {
	url := "https://www.toutiao.com/api/pc/feed/?max_behot_time=%d&category=__all__&utm_source=toutiao&widen=1"

	req, err := http.NewRequest("GET", fmt.Sprintf(url, MaxBehotTime), nil)
	if err != nil {
		fmt.Println("create request err: ", err)
		return nil, err
	}
	req.Header.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36 Edg/89.0.774.57")
	req.Header.Add("Referer", "https://www.toutiao.com/")
	var client http.Client
	res, err := client.Do(req)
	if err != nil {
		fmt.Println("do request err:", err)
		return nil, err
	}
	defer res.Body.Close()
	var resp = &Response{}
	if err := json.NewDecoder(res.Body).Decode(resp); err != nil {
		// 如果爬取不到，获取本地已经保存的数据
		if resp, err := ReadData("dataset/data.json"); err != nil {
			return nil, err
		}else {
			return resp, nil
		}
	}
	return resp, nil
}
