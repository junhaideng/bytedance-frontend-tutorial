package scraper

import (
	"encoding/json"
	"os"
)

func ReadData(filename string) (*Response, error){
	var resp = &Response{}
	data, err := os.ReadFile(filename)
	if err != nil {
		return nil, err
	}
	err = json.Unmarshal(data, resp)
	if err != nil {
		return nil, err
	}
	return resp, nil
}
