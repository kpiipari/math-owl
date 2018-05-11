import { combineReducers } from 'redux';
import { round, incrementLevel, setGameType, incrementScore, time, gameStarted, gameSelected, roundEnded, gameEnded, roundFetchFail, answer, addPlayer, roundTracker } from './additionReducer';

const rootReducer = combineReducers({
    incrementLevel,
    round,
    setGameType,
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