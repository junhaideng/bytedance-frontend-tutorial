package scrapy

import (
	"github.com/gocolly/colly"
	"strings"
)

type ListItem struct {
	// 订单号
	DealID string `json:"deal_id"`
	// 图片链接
	Img string `json:"img"`
	// 商家
	Brand string `json:"brand"`
	// 商品标题
	Title string `json:"title"`
	// 价格
	Price string `json:"price"`
	// 原价
	OriPrice string `json:"ori_price"`
	// 已经销售
	Sold string `json:"sold"`
}

// 使用colly爬取到对应的数据，保存到ListItem中
func GetGuessLikeList() []ListItem{
	c := colly.NewCollector()

	var items []ListItem
	
	c.OnHTML("body > dl > dd:nth-child(1) > dl", func(dl *colly.HTMLElement) {
		dl.ForEach("dd", func(i int, dd *colly.HTMLElement) {
			did := dd.DOM.Find("a > div")
			img := dd.DOM.Find("div.imgbox")
			brand := dd.DOM.Find("div.dealcard-brand")
			title := dd.DOM.Find("div.title")
			price := dd.DOM.Find("div.price>span:first-child")
			oriPrice := dd.DOM.Find("div.price>del")
			sold := dd.DOM.Find("span.line-right")
			items = append(items, ListItem{
				DealID: did.AttrOr("data-did", ""),
				Img:    ParseImageSrc(img.AttrOr("data-src", "")),
				Brand:  brand.Text(),
				Title:  title.Text(),
				Price:  price.Text(),
				OriPrice: oriPrice.Text(),
				Sold:   strings.TrimSpace(sold.Text()),
			})
		})

	})
	// 爬取相应网页
	c.Visit("http://i.meituan.com/index/DealList")
	return items
}
