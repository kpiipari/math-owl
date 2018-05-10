import { combineReducers } from 'redux';
import { round, incrementLevel, setGameType, incrementScore, time, gameStarted, gameSelected, roundEnded, gameEnded, roundFetchFail, answer, addPlayer } from './additionReducer';

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
    addPlayer
});

export default rootReducer;