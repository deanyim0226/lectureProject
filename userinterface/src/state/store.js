import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { thunk } from 'redux-thunk';

//combine reducer is used to combine all the reducers we need in our store/state
const rootReducer = combineReducers({

})

/*
configureStore accepts a reducer function as a named argument
configureStore automatically sets up the store with good default settings
*/

//create configure and export the store from this code
export default configureStore(
{reducer: rootReducer},
{},//initial state if we want to set from store instead of reducer
applyMiddleware(thunk))