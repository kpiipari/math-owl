import { combineReducers } from 'redux';
import { round, level, gameType, score, time, gameStarted, 
    gameSelected, roundEnded, gameEnded, roundFetchFail, 
    answer, player, roundCount, playerId, updatePlayerTotalScore } from './gameReducer';

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
    updatePlayerTotalScore
});

export default rootReducer;