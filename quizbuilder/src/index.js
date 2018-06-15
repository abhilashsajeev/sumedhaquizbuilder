import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import CssBaseline from '@material-ui/core/CssBaseline';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <CssBaseline/>
      <App />
    </React.Fragment>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();