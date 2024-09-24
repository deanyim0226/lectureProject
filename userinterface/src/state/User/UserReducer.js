/*
defines the initial state for user and 
also returns user reducer with logic to create new user state
*/

import * as ActionTypes from "../actionTypes"


const Initial_State = {

    auth : {
        accessToken: "",
        refreshToken: ""
    }
};

//wrtie callback / reducer to generate new state upon action change

const userReducer = (state = Initial_State, action) =>{
    //switch case logic to read action type and return new state / updated state

    switch(action.type){

        case ActionTypes.AddTokensToStore:
            //...state : {User, }
            //return all other states as it is but updating user using payload
            return {
                ...state,   auth:action.payload 

            };
        
        case ActionTypes.RemoveTokenFromStore:
            return {...state, auth:action.payload}

        default:

            return state;
            
    }
}

export default userReducer;