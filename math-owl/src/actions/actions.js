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
        game: "addition"
    }
}

export function subtractionGame() {
    return {
        type: types.SUBTRACTION_GAME,
        game: "subtraction"
    }
}

export function multiplyGame() {
    return {
        type: types.MULTIPLY_GAME,
        game: "multiply"
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

export function updateScore(score) {
    return {
        type: types.UPDATE_SCORE,
        score
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

export function roundTracker() {
    return {
        type: types.ROUND_TRACKER,
    }
}

export function incrementRoundCounter() {
    return {
        type: types.INCREMENT_ROUND_TRACKER,
    }
}

export function resetRoundCounter() {
    return {
        type: types.RESET_ROUND_COUNT,
    }
}

export function resetScore() {
    return {
        type: types.RESET_SCORE,
    }
}

export function associatePlayerToGame(player) {
    return {
        type: types.ASSOCIATE_PLAYER_ID,
        player
    }
}

export function updateTotalScore(total_score) {
    return {
        type: types.UPDATE_TOTAL_SCORE,
        total_score
    }
}

// Ascyn action creators

export function fetchAdditionRound() {
    return dispatch => {
        return fetch(`/api/addition/new`) 
        .then(response => response.json())
        .then(round => dispatch(roundFetchedSuccess(round)))
        .catch(error => dispatch(roundFetchFail(true, error)))
    }
}

export function submitAnswer(id, answer) {
    return dispatch => {
        return fetch(`/api/addition/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { user_answer: answer })
        })
        .then(response => response.json())
        .then(score => dispatch(updateScore(score)))
        .catch(error => dispatch(roundFetchFail(true, error)))
    }
}

export function submitPlayerName(name) {
    return dispatch => {
        return fetch(`/api/player/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { name: name })
        })
        .then(response => response.json())
        .catch(error => dispatch(roundFetchFail(true, error)))
    }
}

export function updateGameWithPlayerId(player_id, id) {
    return dispatch => {
        return fetch(`/api/addition/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { player_id: player_id })
        })
        .then(response => response.json())
        .then(game => dispatch(getTotalScore(game.player_id)))
        .catch(error => dispatch(roundFetchFail(true, error)))
    }
}

export function getTotalScore(player_id) {
    return dispatch => {
        return fetch(`/api/player/${player_id}`) 
        .then(response => response.json())
        .then(player => dispatch(updateTotalScore(player.total_score)))
        .catch(error => dispatch(roundFetchFail(true, error)))
    }
}
