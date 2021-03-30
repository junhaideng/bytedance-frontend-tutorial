import React, { createRef, RefObject } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Item from "./components/Item";
import "./App.css";
import { CarouselRef } from "antd/lib/carousel";
import Image from "./components/Image";

const items = [
  {
    id: 1,
    src:
      "https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 2,
    src:
      "https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 3,
    src:
      "https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 4,
    src:
      "https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
];

interface State {}

interface Props {}

class App extends React.Component<Props, State> {
  carousel: RefObject<CarouselRef>;
  constructor(props: Props) {
    super(props);
    this.carousel = createRef();

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleNext() {
    this.carousel.current?.next();
  }

  handlePrev() {
    this.carousel.current?.prev();
  }

  render() {
    return (
      <div className="carousel">
        <LeftOutlined className="prev-button" onClick={this.handlePrev} />
        <RightOutlined className="next-button" onClick={this.handleNext} />
        <Carousel
          ref={this.carousel}
          autoplay
          lazyLoad="ondemand"
          dots
          infinite
          draggable
        >
          {items.map((item) => (
            <Item
              id={item.id}
              key={item.id}
              className="carousel-item"
              component={<Image src={item.src} />}
            />
          ))}
        </Carousel>
      </div>
    );
  }
}

export default App;
