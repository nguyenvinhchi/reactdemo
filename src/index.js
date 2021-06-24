import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import { BrowserRouter } from 'react-router-dom';
// import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import burgerReducer from './burger/store/reducers/burgerBuilder';
// import orderReducer from './burger/store/reducers/order';
// import authReducer from './burger/store/reducers/auth';
// import {Provider} from 'react-redux';
// import thunk from 'redux-thunk';

// //middleware
// // const logger = store => {
// //     return next => {
// //         return action => {
// //             console.log('[Middleware] Dispatching', action);
// //             const result = next(action);
// //             console.log('[Middleware] next state]', store.getState());
// //             return result;
// //         }
// //     }
// // }

// //reducer from burger
// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
// const rootReducer = combineReducers({
//     burgerBuilderState: burgerReducer,
//     orderState: orderReducer,
//     authState: authReducer
// })
// const store = createStore(rootReducer, composeEnhancers(
//     applyMiddleware(thunk)
// ));

// const app = (
//     <Provider store={store}>
//         <BrowserRouter>
//         <App />
//         </BrowserRouter>
//     </Provider>
// )
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
