import { createStore } from "redux";
import reducers from "./reducers";
import Immutable from "immutable";

const store = initialState => createStore(reducers, initialState);

export default store;
