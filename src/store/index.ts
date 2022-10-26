import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkDispatch } from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import weatherReducer from "./reducers/weatherReducers";
import alertReducer from "./reducers/alertReducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
  alert: alertReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

export type RootState = ReturnType<typeof rootReducer>;

type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
