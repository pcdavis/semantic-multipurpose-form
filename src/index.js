import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { configureStore } from "./reduxStore/configureStore";
import ScrollToTop from "./utils/ScrollToTop";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import * as serviceWorker from "./serviceWorker";

const store = configureStore();

const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </Provider>,

    rootEl
  );
};

// if (module.hot) {
//   module.hot.accept('./app/layout/App', () => {
//     setTimeout(render);
//   });
// }

render();

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
