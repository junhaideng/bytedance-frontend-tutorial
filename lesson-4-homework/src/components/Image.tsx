import React from "react";
import "../style/Image.css";

interface Props {
  src?: string;
}

interface State {}

class Image extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { src } = this.props;
    return (
      <div
        className="carousel-image"
        // 将图片保存到容器的背景位置，容易控制其布局
        style={{ backgroundImage: `url(${src})` }}
      ></div>
    );
  }
}

export default Image;
