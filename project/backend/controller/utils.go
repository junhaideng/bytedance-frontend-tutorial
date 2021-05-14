package controller

// 成功
const MSG_SUCCESS = "success"
// 失败
const MSG_FAILED = "failed"

// 向前端返回的数据格式
type Response struct {
	Code    int         `json:"code,omitempty"`
	Message string      `json:"message,omitempty"`
	Data    interface{} `json:"data,omitempty"`
}
