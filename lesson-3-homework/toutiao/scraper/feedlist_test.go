package scraper

import (
	"testing"	
	"time"
)


func TestFeedList(t *testing.T){
	resp, err := GetFeedList(time.Now().Unix())
	if err != nil {
		t.Fatal(err)
	}
	t.Log(resp)
}