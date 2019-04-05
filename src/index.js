import React from "react";
import ReactDOM from "react-dom";
import Postform from "./compnents/Postform";
import Posts from "./compnents/Posts";
import store from "./store";
import { Provider } from "react-redux";
import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Postform />
        <Posts />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
