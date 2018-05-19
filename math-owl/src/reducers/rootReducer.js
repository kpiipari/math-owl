import { combineReducers } from 'redux';
import { round, level, gameType, score, time, gameStarted, 
    gameSelected, roundEnded, gameEnded, roundFetchFail, 
    answer, player, roundCount, playerId, updatePlayerTotalScore } from './gameReducer';
import { leaderboard, leaderboardFetchFail } from './leaderboardReducer';

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
    leaderboardFetchFail
});

export default rootReducer;