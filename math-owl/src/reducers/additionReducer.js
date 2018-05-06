import initialState from './initialState';
import { INCREMENT_LEVEL, ADDITION_GAME, SUBTRACTION_GAME, MULTIPLY_GAME } from '../actions/actionTypes';

export default function incrementLevel(state = initialState.level, action) {
    switch (action.type) {
        case INCREMENT_LEVEL:
            return {
                count: state.level + 1 
            }
        default:
            return state
}

export default function setGameType(state = initialState, action) {
    switch (action.type) {
        case ADDITION_GAME:
            return action.game

        case SUBTRACTION_GAME:
            return action.game

        case MULTIPLY_GAME:
            return action.game

        default:
            return state
    }
}

/*export default function additionGame(state = initialState.game, action) {
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
*/}
