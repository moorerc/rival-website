import * as React from "react";
import "./App.css";

const logo = require("./RivalLogo_200.svg");

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <object data={logo} type="image/svg+xml" className="App-logo"></object>
        </header>
      </div>
    );
  }
}

export default App;
