package main

import (
	"fmt"
	"net/http"
	"time"
	"toutiao/middleware"
	"toutiao/scraper"

	"github.com/gin-gonic/gin"
)


func serverData(c *gin.Context) {
	resp, err := scraper.GetFeedList(time.Now().Unix())
	if err != nil {
		c.JSON(http.StatusNotFound, []byte{})
		fmt.Println("err: ", err)
		return 
	}

	c.Data(http.StatusOK, "application/json", resp.Data)
}

func main() {

	r := gin.Default()
	r.Use(middleware.Cors())
	r.GET("/json", serverData)

	panic(r.Run())
}
