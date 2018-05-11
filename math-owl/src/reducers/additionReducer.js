export function incrementLevel(state = 1, action) {
    switch (action.type) {
        case 'INCREMENT_LEVEL':
            return {
                count: state.level + 1 
            }
        default:
            return state
    }
};

export function gameType(state = "", action) {
    switch (action.type) {
        case 'ADDITION_GAME':
            return action.game

        case 'SUBTRACTION_GAME':
            return action.game

        case 'MULTIPLY_GAME':
            return action.game
        
        case 'GAME_TYPE':
            return action.game

        default:
            return state
    }
}

export function incrementScore(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT_SCORE':
            return {
                score: state.score + 1 
            }
            
        default:
            return state
    }
}

export function time(state = 0, action) {
    switch (action.type) {
        case 'TIME_FETCHED_SUCCESS':
            return action.time
        default:
            return state
    }
}

export function gameStarted(state = false, action) {
    switch (action.type) {
        case 'GAME_STARTED':
            return action.gameStarted
        default:
            return state
    }
}

export function gameSelected(state = false, action) {
    switch (action.type) {
        case 'GAME_SELECTED':
            return action.gameSelected
        default:
            return state
    }
}

export function roundEnded(state = false, action) {
    switch (action.type) {
        case 'ROUND_ENDED':
            return action.roundEnded
        default:
            return state
    }
}

export function gameEnded(state = false, action) {
    switch (action.type) {
        case 'GAME_ENDED':
            return action.gameEnded
        default:
            return state
    }
}

export function round(state = [], action) {
    switch (action.type) {
        case 'ROUND_FETCHED_SUCCESS':
            return Object.assign({}, state, action.round)
        default:
            return state
    }
}

export function roundFetchFail(state = false, action) {
    switch (action.type) {
        case 'ROUND_FETCH_FAIL':
            return action.roundFetchFail
        default:
            return state
    }
}

export function answer(state = "", action) {
    switch (action.type) {
        case 'ANSWER':
            return action.answer
        default:
            return state
    }
}

export function addPlayer(state = "", action) {
    switch (action.type) {
        case 'ADD_PLAYER':
            return action.player
        default:
            return state
    }
}


export function roundTracker(state = 1, action) {
    switch (action.type) {
        case 'ROUND_TRACKER':
            return { roundTracker: state.roundTracker }
        case 'INCREMENT_ROUND_TRACKER':
            return { ...state, roundTracker: state.roundTracker + 1 };
        default:
            return state
    }
}

