//this defines all the actions raised for user state like - singupUser, etc

import * as ActionType from "../actionTypes"

export const setTokens = (token) => {

    return {
        type: ActionType.AddTokensToStore,
        payload: token
    }
};

export const removeToken = (token) => {

    return {
        type: ActionType.RemoveTokenFromStore,
        payload: token
    }
};