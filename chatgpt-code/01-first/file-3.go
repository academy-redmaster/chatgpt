// convert the code to javascript , python , php , c++ , ...

package main

import "fmt"

type Trade struct {
	Symbol string
	Price  float64
	Volume int
	Buy    bool
}

func (t *Trade) Result() float64 {
	return float64(t.Volume) * t.Price
}

func main() {
	t1 := Trade{"MSFT", 100.0, 100, true}
	fmt.Printf("%+v", t1)
	fmt.Println(t1.Result())
}