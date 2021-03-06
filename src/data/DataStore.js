import { createStore, applyMiddleware } from "redux";
import { ShopReducer } from "./ShopReducer";
import { CartReducer } from "./CartReducer";
import { CommonReducer } from "./CommonReducer";
import { asyncActions } from "./AsyncMiddleware"

// setting up a datastore using a reducer
export const SportStoreDataStore =
    createStore(CommonReducer(ShopReducer, CartReducer),
        applyMiddleware(asyncActions));