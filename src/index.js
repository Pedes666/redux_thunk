import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

/**
 * The <Provider> component makes the redux store
 available to any nested components
  that need to access the redux store
*/

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
