import React from "react";
import "../style/Item.css";

interface Props {
  id?: string | number;
  component?: React.ReactNode;
  className?: string;
}

class Item extends React.Component<Props, {}> {
  componentDidMount() {
    const { id } = this.props;
    // just for test
    console.log("load this id: ", id);
  }

  render() {
    const { component } = this.props;
    return <div className="carousel-item">{component}</div>;
  }
}

export default Item;
