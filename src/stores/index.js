// esse é o arquivo inicial de configuração do redux
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = [sagaMiddleware];

const composer = process.env.NODE_ENV === 'development'
  ? compose(
    // coloca os middlewares dentro do redux
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...middlewares);
// coloca os middlewares dentro do redux

// se tiver me produção não vai precisar do compose

// aqui dentro vai passar os reducers
// inicializa o redux na aplicação
const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
