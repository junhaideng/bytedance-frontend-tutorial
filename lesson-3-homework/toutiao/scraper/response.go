package scraper

import "encoding/json"

type Next struct {
	MaxBehotTime int
}

type Response struct {
	Data    json.RawMessage `json:"data,omitempty"`
	HasMore bool  `json:"has_more,omitempty"`
	Message string  `json:"message,omitempty"`
	Next    Next    `json:"next,omitempty"`
}
