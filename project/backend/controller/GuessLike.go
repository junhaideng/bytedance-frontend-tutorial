package controller

import (
	"github.com/gin-gonic/gin"
	"meituan/scrapy"
	"net/http"
)

// 猜你喜欢内容接口
func GetGuessLikeList(c *gin.Context){
	c.JSON(http.StatusOK,Response{
		Code: 0,
		Message: MSG_SUCCESS,	
		Data: scrapy.GetGuessLikeList(),
	})
}
