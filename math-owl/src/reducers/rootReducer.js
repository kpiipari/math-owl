import { combineReducers } from 'redux';
import { round, incrementLevel, gameType, incrementScore, time, gameStarted, gameSelected, roundEnded, gameEnded, roundFetchFail, answer, addPlayer, roundTracker } from './additionReducer';

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
    roundTracker
});

export default rootReducer;