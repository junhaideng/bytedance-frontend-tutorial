package scrapy

import (
	"strings"
)

// 解析文件的url，如果没有scheme，添加
func ParseImageSrc(src string) string {
	if strings.HasPrefix(src, "http",){
		return src
	}
	return "https:" + src
}
