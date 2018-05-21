import { combineReducers } from 'redux';
import { round, level, gameType, score, time, gameStarted, 
    gameSelected, roundEnded, gameEnded, roundFetchFail, 
    answer, player, roundCount, playerId, updatePlayerTotalScore, nameSubmitted } from './gameReducer';
import { leaderboard, leaderboardFetchFail, leaderboardLoading } from './leaderboardReducer';

const rootReducer = combineReducers({
    level,
    round,
    gameType,
    score,
    time,
    gameStarted,
    gameSelected,
    roundEnded,
    gameEnded,
    roundFetchFail,
    answer,
    player,
    roundCount,
    playerId,
    updatePlayerTotalScore,
    leaderboard,
    leaderboardFetchFail,
    leaderboardLoading,
    nameSubmitted
});

export default rootReducer;