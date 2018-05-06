import initialState from './initialState';
import { INCREMENT_LEVEL, ADDITION_GAME, SUBTRACTION_GAME, MULTIPLY_GAME, INCREMENT_SCORE, TIME_FETCHED_SUCCESS, GAME_STARTED, GAME_SELECTED, ROUND_ENDED, GAME_ENDED, ROUND_FETCHED_SUCCESS, ROUND_FETCH_FAIL, ANSWER, ADD_PLAYER } from '../actions/actionTypes';
import { defaultCipherList } from 'constants';

export default function incrementLevel(state = initialState.level, action) {
    switch (action.type) {
        case INCREMENT_LEVEL:
            return {
                count: state.level + 1 
            }
        default:
            return state
}

export default function setGameType(state = initialState.game, action) {
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

export default function incrementScore(state = initialState.score, action) {
    switch (action.type) {
        case INCREMENT_SCORE:
            return {
                count: state.score + 1 
            }
        default:
            return state
}

export default function time(state = initialState.time, action) {
    switch (action.type) {
        case TIME_FETCHED_SUCCESS:
            return action.time
        default:
            return state
    }
}

export default function gameStarted(state = initialState.gameStarted, action) {
    switch (action.type) {
        case GAME_STARTED:
            return action.gameStarted
        default:
            return state
    }
}

export default function gameSelected(state = initialState.gameSelected, action) {
    switch (action.type) {
        case GAME_SELECTED:
            return action.gameSelected
        default:
            return state
    }
}

export default function roundEnded(state = initialState.roundEnded, action) {
    switch (action.type) {
        case ROUND_ENDED:
            return action.roundEnded
        default:
            return state
    }
}

export default function gameEnded(state = initialState.gameEnded, action) {
    switch (action.type) {
        case GAME_ENDED:
            return action.gameEnded
        default:
            return state
    }
}

export default function round(state = initialState.round, action) {
    switch (action.type) {
        case ROUND_FETCHED_SUCCESS:
            return action.round
        default:
            return state
    }
}

export default function roundFetchFail(state = false, action) {
    switch (action.type) {
        case ROUND_FETCH_FAIL:
            return action.roundFetchFail
        default:
            return state
    }
}

export default function answer(state = initialState.answer, action) {
    switch (action.type) {
        case ANSWER:
            return action.answer
        default:
            return state
    }
}

export function addPlayer(state = initialState.player, action) {
    switch (action.type) {
        case ADD_PLAYER:
            return action.player
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
*/
