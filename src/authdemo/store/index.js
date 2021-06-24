import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authReducer } from '../store/auth'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
import { profileReducer } from "./profile";

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({thunk: false }), sagaMiddleware]

const store = configureStore({
  reducer: { auth: authReducer, profile: profileReducer },
  middleware
});

sagaMiddleware.run(rootSaga)

export default store;
