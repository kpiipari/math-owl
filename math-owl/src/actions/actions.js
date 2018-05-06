import * as types from './actionTypes';
import { API_URL } from './actionTypes'

export function incrementLevel() {
    return {
        type: types.INCREMENT_LEVEL
    };
}

export function additionGame() {
    return {
        type: types.ADDITION_GAME,
        game: "Add"
    }
}

export function subtractionGame() {
    return {
        type: types.SUBTRACTION_GAME,
        game: "Subtract"
    }
}

export function multiplyGame() {
    return {
        type: types.MULTIPLY_GAME,
        game: "Multiply"
    }
}

export function incrementScore() {
    return {
        type: types.SCORE
    }
}

/* 

export function receiveGame(json) {
    return {type: types.RECEIVE_GAME, game: json.game};
}

export function fetchAdditionGame() {
    return dispatch => {
        return fetch(`${API_URL}/addition`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => dispatch(receiveGame(json)));
    };
}

/* 
export const FETCH_GAME = 'FETCH_GAME';
export const RECEIVE_GAME = 'RECEIVE_GAME';
export const GAME = 'GAME';
export const SCORE = 'SCORE';
export const TIME = 'TIME';
export const PLAYER = 'PLAYER';
export const GAME_SELECTED = 'GAME_SELECTED';
export const GAME_STARTED = 'GAME_STARTED';
export const ROUND_ENDED = 'ROUND_ENDED';
export const GAME_ENDED = 'GAME_ENDED';
export const ROUND_FETCHED_SUCCESS = 'ROUND_FETCHED_SUCCESS';
export const ROUND_FETCHED_FAIL = 'ROUND_FETCHED_FAIL';
export const ANSWER = 'ANSWER';
*/