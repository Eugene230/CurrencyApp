import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./rootSaga";

const composeEnhancers = composeWithDevTools({ trace: true });

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

sagaMiddleware.run(rootSaga);

export default store;
