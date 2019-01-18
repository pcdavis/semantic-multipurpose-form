import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension' // npm install -save-dev redux-devtools-extension
import rootReducer from './rootReducer'

export const configureStore = (preloadedState) => {
  const middlewares = [];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];

  const composedEnhancer  = composeWithDevTools(...storeEnhancers);

  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancer
  )

  // if (process.env.NODE_ENV !== 'production') {
  //   if (module.hot) {
  //     module.hot.accept('../reducers/rootReducer', () => {
  //       const newRootReducer = require('../reducers/rootReducer').default;
  //       store.replaceReducer(newRootReducer)
  //     })
  //   }
  // }
  console.log('%c configureStore-getState(): ','color: blue',store.getState())
  return store;
}