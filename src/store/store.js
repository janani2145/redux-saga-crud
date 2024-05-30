// store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../Redux/Reducer/Reducer';
import rootSaga from '../reduxSaga/saga';



const sagaMiddleware = createSagaMiddleware();

const store = createStore(
rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default store;
