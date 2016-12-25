import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const reducers = combineReducers({
  app: reducer,
});

if (process.env.ENABLE_LOGGER &&
  process.env.IS_BROWSER &&
  process.env.NODE_ENV !== 'production') {
}

const store = createStore(
  reducers,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(thunk),
);

export default store;
