import { combineReducers } from 'redux';
import { round, level, gameType, score, time, gameStarted, gameSelected, roundEnded, gameEnded, roundFetchFail, answer, addPlayer, roundCount } from './additionReducer';

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
    addPlayer,
    roundCount
});

export default rootReducer;