const initialState = {
    leaderboardFetchFail: false,
    leaderboard: [],
};

export function leaderboard(state = initialState.leaderboard, action) {
    switch (action.type) {
        case 'LEADERBOARD_FETCH_SUCCESS':
            const players = action.players;
            const playersArray = players.map(player => player)
            return Object.assign({}, state, playersArray)
        default:
            return state
    }
}

export function leaderboardFetchFail(state = initialState.leaderboardFetchFail, action) {
    switch (action.type) {
        case 'LEADERBOARD_FETCH_FAIL':
            return action.leaderboardFetchFail
        default:
            return state
    }
}

