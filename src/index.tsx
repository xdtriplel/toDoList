import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { reducer } from "./store/todoesReducer";
import { createStore } from "redux";

const container = document.getElementsByClassName("container")[0];
const root = createRoot(container);

const store = createStore(reducer);

root.render(
    <Provider store={store}>
        <App />
    </Provider>

);
