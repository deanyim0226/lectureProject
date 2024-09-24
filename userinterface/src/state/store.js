/*
this would be the definition of store which will get all the reducers combined as one state

only one store is allowed in one application, one reducer per store so we need to combine if multiple reducers are there

store sends notification to view for change of state
this allows to inject middlewares like thunk, promise in application

*/
import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import {thunk} from "redux-thunk";//is used to pipeline the dispatched objects and give us a sync execution by being async

import userReducer from "./User/UserReducer";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'


//persistConfig for redux-persist
const persistConfig ={
    key: "root", //key for storing state in localstorage
    storage // defined the storage engine (local storage)
}

//combine reducer is used to combine all the reducers we need in our store/state
const rootReducer = combineReducers({
    userReducer,
})


// Wrap the rootReducer with persistReducer to enable persistence
const persistedReducer = persistReducer(persistConfig, rootReducer)

/*
configureStore accepts a reducer function as a named argument
configureStore automatically sets up the store with good default settings
*/

//create configure and export the store from this code
const store = configureStore(
    {reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware({
                serializableCheck: false,// disable serializable check for redux-persist
            }).concat(thunk) // add redux-thunk middleware
    },
    {}//initial state if we want to set from store instead of reducer
)

export const persistor = persistStore(store)

export default store