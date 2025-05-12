import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage"; 
import cartReducer from "./modules/cartSlice";
import authReducer from "./modules/authSlice";
import searchReducer from "./modules/searchSlice";


const persistConfig = {
    key:'evershop',
    storage,
}
const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
    search: searchReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
})
const persistor = persistStore(store);
export { store, persistor };