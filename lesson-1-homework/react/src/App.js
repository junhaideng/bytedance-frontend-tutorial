import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(){
    alert("submit successfully")
  }

  render() {
    return (
      <div>
        <div>
          <div className="title">支持自定义输入形式</div>
          <div>
            Fruit:
            <input type="text" />
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
        <br />
        <div>
          <div className="title">支持选择形式</div>
          <div>
            Fruit:
            <select name="fruit" id="fruit">
              <option value="Banana">Banana</option>
              <option value="Cherry">Cherry</option>
              <option value="Apple">Apple</option>
              <option value="Strawberry">Strawberry</option>
              <option value="Lemon">Lemon</option>
              <option value="Orange">Orange</option>
            </select>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
