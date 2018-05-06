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
        type: types.INCREMENT_SCORE
    }
}

export function timeFetchedSuccess(time) {
    return {
        type: types.TIME_FETCHED_SUCCESS,
        time
    }
}

export function gameSelected(bool) {
    return {
        type: types.GAME_SELECTED,
        gameSelected: bool
    }
}

export function gameStarted(bool) {
    return {
        type: types.GAME_STARTED,
        gameStarted: bool
    }
}

export function roundEnded(bool) {
    return {
        type: types.ROUND_ENDED,
        roundEnded: bool
    }
}

export function gameEnded(bool) {
    return {
        type: types.GAME_ENDED,
        gameEnded: bool
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

export const ROUND_FETCHED_SUCCESS = 'ROUND_FETCHED_SUCCESS';
export const ROUND_FETCHED_FAIL = 'ROUND_FETCHED_FAIL';
export const ANSWER = 'ANSWER';
export const PLAYER = 'PLAYER';
*/