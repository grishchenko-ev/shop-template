// import { applyMiddleware, legacy_createStore as createStore } from 'redux';
// import thunk from 'redux-thunk';
// import { rootReducer } from './reducers';

// export const store = createStore(rootReducer, applyMiddleware(thunk));
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice';

const rootReducer = combineReducers({
  userReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
