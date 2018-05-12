import { combineReducers } from 'redux';
import { round, incrementLevel, gameType, incrementScore, time, gameStarted, gameSelected, roundEnded, gameEnded, roundFetchFail, answer, addPlayer, roundCount } from './additionReducer';

const rootReducer = combineReducers({
    incrementLevel,
    round,
    gameType,
    incrementScore,
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