export function leaderboardFetchedSuccess(leaderboard) {
    return {
        type: 'LEADERBOARD_FETCH_SUCCESS',
        leaderboard
    }
}

export function leaderboardFetchFail(bool, error) {
    console.log(error)
    return {
        type: 'LEADERBOARD_FETCH_FAIL',
        leaderboardFetchFail: bool
    }
}

// Ascyn action creators

export function fetchLeaderboard(gameRoute) {
    return dispatch => {
        return fetch(`/api/${gameRoute}/new`) 
        .then(response => response.json())
        .then(leaderboard => dispatch(leaderboardFetchedSuccess(leaderboard)))
        .catch(error => dispatch(leaderboardFetchFail(true, error)))
    }
}