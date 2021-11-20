import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";

// setting up a datastore using a reducer
export const SportStoreDataStore = createStore(ShopReducer);