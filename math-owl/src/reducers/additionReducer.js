import initialState from './initialState';
import { FETCH_GAME, RECEIVE_GAME } from '../actions/actionTypes';

export default function additionGame(state = initialState.game, action) {
    let newState;
    switch (action.type) {
        case FETCH_GAME:
            console.log('FETCH_GAME Action')
            return action;
        case RECEIVE_GAME:
            newState = action.game;
            console.log('RECEIVE_GAME Action')
            return newState;
        default:
            return state;

    }
}