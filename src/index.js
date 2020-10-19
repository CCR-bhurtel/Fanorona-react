import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Chessboard from "./components/chessboard/chessboard";
import * as M from "materialize-css";

import * as serviceWorker from "./serviceWorker";

M.AutoInit();
serviceWorker.unregister();
if (module.hot) {
  module.hot.accept();
}

const App = (
  <div className="App noselect flex flex-ai flex-jcc flex-clo">
    <Chessboard />
  </div>
);

ReactDOM.render(App, document.getElementById("root"));
