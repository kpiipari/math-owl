const initialState = {
    level: 1,
    game: "",
    score: 0,
    time: 0,
    round: [],
    gameSelected: false,
    gameStarted: false,
    roundEnded: false,
    gameEnded: false,
    answer: "",
    player: "",
    roundFetchFail: false,
    roundCount: 1
};

export function score(state = initialState.score, action) {
    switch (action.type) {
        case 'UPDATE_SCORE':
           return action.score.score
        default:
            return state
            
    }
}

export function level(state = 1, action) {
    switch (action.type) {
        case 'INCREMENT_LEVEL':
            return state + 1
        default:
            return state
    }
};

export function gameType(state = initialState.game, action) {
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
            return state + 1 
            
        default:
            return state
    }
}

export function time(state = initialState.time, action) {
    switch (action.type) {
        case 'TIME_FETCHED_SUCCESS':
            return action.time
        default:
            return state
    }
}

export function gameStarted(state = initialState.gameStarted, action) {
    switch (action.type) {
        case 'GAME_STARTED':
            return action.gameStarted
        default:
            return state
    }
}

export function gameSelected(state = initialState.gameSelected, action) {
    switch (action.type) {
        case 'GAME_SELECTED':
            return action.gameSelected
        default:
            return state
    }
}

export function roundEnded(state = initialState.roundEnded, action) {
    switch (action.type) {
        case 'ROUND_ENDED':
            return action.roundEnded
        default:
            return state
    }
}

export function gameEnded(state = initialState.gameEnded, action) {
    switch (action.type) {
        case 'GAME_ENDED':
            return action.gameEnded
        default:
            return state
    }
}

export function round(state = initialState.round, action) {
    switch (action.type) {
        case 'ROUND_FETCHED_SUCCESS':
            return Object.assign({}, state, action.round)
        default:
            return state
    }
}

export function roundFetchFail(state = initialState.roundFetchFail, action) {
    switch (action.type) {
        case 'ROUND_FETCH_FAIL':
            return action.roundFetchFail
        default:
            return state
    }
}

export function answer(state = initialState.answer, action) {
    switch (action.type) {
        case 'ANSWER':
            return action.answer
        default:
            return state
    }
}


export function addPlayer(state = initialState.player, action) {
    switch (action.type) {
        case 'ADD_PLAYER':
            return action.player
        default:
            return state
    }
}


export function roundCount(state = 1, action) {
    switch (action.type) {
        case 'INCREMENT_ROUND_TRACKER':
            return state + 1
        default:
            return state
    }
}

