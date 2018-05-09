import * as types from './actionTypes';
import { API_URL } from './actionTypes'

export function incrementLevel() {
    return {
        type: types.INCREMENT_LEVEL
    };
}

export function gameType(text) {
    return {
        type: types.GAME_TYPE,
        game: text
    }
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

export function answerSubmittedSuccess(round) {
    return {
        type: types.ANSWER_SUBMITTED_SUCCESS,
        round
    }
}

export function answerSubmittedFail(bool, error) {
    console.log(error)
    return {
        type: types.ANSWER_SUBMITTED_FAIL,
        answerSubmitFail: bool
    }
}

export function roundFetchedSuccess(round) {
    return {
        type: types.ROUND_FETCHED_SUCCESS,
        round
    }
}

export function roundFetchFail(bool, error) {
    console.log(error)
    return {
        type: types.ROUND_FETCH_FAIL,
        roundFetchFail: bool
    }
}

export function answer(answer) {
    return {
        type: types.ANSWER,
        answer
    }
}

export function addPlayer(player) {
    return {
        type: types.ADD_PLAYER,
        player
    }
}

// Ascyn action creators

export function fetchAdditionRound() {
    return dispatch => {
        return fetch(`${API_URL}/addition/new`)
        .then(response => response.json())
        .then(round => dispatch(roundFetchedSuccess(round)))
        .catch(error => dispatch(roundFetchFail(true, error)))
    }
}

export function submitAnswer(url, id) {
    return dispatch => {
        return fetch(`${API_URL}/addition/${id}`)
        .then(response => response.json())
        .then(round => dispatch(answerSubmittedSuccess(round)))
        .catch(error => dispatch(roundFetchFail(true, error)))
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
*/