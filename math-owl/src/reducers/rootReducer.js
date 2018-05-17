import { combineReducers } from 'redux';
import { round, level, gameType, score, time, gameStarted, 
    gameSelected, roundEnded, gameEnded, roundFetchFail, 
    answer, player, roundCount, playerId, updatePlayerTotalScore } from './additionReducer';

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