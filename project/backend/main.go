package main

import (
	"meituan/controller"
	"meituan/middleware"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	// 添加中间件
	r.Use(middleware.Cors())
	// 创建api路由组
	v := r.Group("/api")
	// 健康检查api
	v.GET("/healthy", controller.Healthy)
	// 猜你喜欢接口api
	v.GET("/guess-like-list", controller.GetGuessLikeList)
	// 产品详情api，仅限部分产品
	v.GET("/deal-detail", controller.GetDealDetail)
	// 运行，默认8080端口
	r.Run()
}
