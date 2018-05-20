export function leaderboardFetchedSuccess(players) {
    return {
        type: 'LEADERBOARD_FETCH_SUCCESS',
        players
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

export function fetchLeaderboard() {
    return dispatch => {
        return fetch(`/api/player`) 
        .then(response => response.json())
        .then(players => dispatch(leaderboardFetchedSuccess(players)))
        .catch(error => dispatch(leaderboardFetchFail(true, error)))
    }
}