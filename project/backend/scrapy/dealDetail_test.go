package scrapy

import (
	"testing"
)

func TestDealDetail(t *testing.T) {
	data, err := GetDealDetail("640061568")
	if err != nil {
		t.Fatal(err)
	}
	t.Log(data)
}
