package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
)

// 健康检查
func Healthy(c *gin.Context){
	c.JSON(http.StatusOK, Response{
		Code: 0,
		Message: MSG_SUCCESS,
		Data: nil,
	})
}