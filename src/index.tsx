import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { store } from "./state/store";

import "./index.css";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById("root") as HTMLElement,
);
registerServiceWorker();
