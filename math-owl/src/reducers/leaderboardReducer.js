const initialState = {
    leaderboardFetchFail: false,
    leaderboardLoading: false,
    leaderboard: [],
};

export function leaderboard(state = initialState.leaderboard, action) {
    switch (action.type) {
        case 'LEADERBOARD_FETCH_SUCCESS':
            return action.players
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

export function leaderboardLoading(state = initialState.leaderboardLoading, action) {
    switch (action.type) {
        case 'LEADERBOARD_IS_LOADING':
            return action.isLoading
        default:
            return state
    }
}

