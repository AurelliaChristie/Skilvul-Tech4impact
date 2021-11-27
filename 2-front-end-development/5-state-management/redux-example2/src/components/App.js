import React from "react";
import Counter from "./Counter";
import Buttons from "./Buttons";
import Option from "./Option";
import IncrementButton from "./IncrementButton";

class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Counter />
        <Option />
        <Buttons />
        <IncrementButton />
      </div>
    );
  }
}

export default App;
