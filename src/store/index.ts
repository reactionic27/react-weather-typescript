import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import weatherReducer from './reducers/weatherReducers';
import alertReducer from './reducers/alertReducer';

const rootReducer = combineReducers({
    weather: weatherReducer,
    alert: alertReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;