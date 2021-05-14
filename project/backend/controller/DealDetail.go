package controller

import (
	"github.com/gin-gonic/gin"
	"meituan/scrapy"
	"net/http"
)

// 获取产品详情，这里仅仅进行用于测试
// 美团的产品分成好几种，比如说美食，旅游，生活相关的
// 前端仅实现旅游相关的，默认的显示为 `东方明珠广播电视塔`
// 其id对应为640061568
func GetDealDetail(c *gin.Context){
	id := c.DefaultQuery("id", "640061568")
	data, err := scrapy.GetDealDetail(id)
	// 获取失败，返回错误
	if err != nil {
		c.JSON(http.StatusOK, 
		Response{
			Code: -1,
			Message: err.Error(),
			Data: nil,
		})
		return 
	}
	// 获取成功，返回数据
	c.JSON(http.StatusOK,Response{
		Code: 0,
		Message: MSG_SUCCESS,
		Data:data ,
	})
}
