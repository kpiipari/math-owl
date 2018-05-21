export function leaderboardFetchedSuccess(players) {
    return {
        type: 'LEADERBOARD_FETCH_SUCCESS',
        players
    }
}

export function leaderboardLoading(bool) {
    return {
        type: 'LEADERBOARD_IS_LOADING',
        isLoading: bool
    };
}

export function leaderboardFetchFail(bool) {
    return {
        type: 'LEADERBOARD_FETCH_FAIL',
        leaderboardFetchFail: bool
    }
}

// Ascyn action creators

export function fetchLeaderboard() {
    return dispatch => {
        dispatch(leaderboardLoading(true));

        return fetch(`/api/player`) 
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(leaderboardLoading(false));
            return response;
        })
        .then(response => response.json())
        .then(players => dispatch(leaderboardFetchedSuccess(players)))
        .catch(error => dispatch(leaderboardFetchFail(true)))
    }
}