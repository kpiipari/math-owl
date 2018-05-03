import * as types from './actionTypes';
import { API_URL } from './actionTypes'

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