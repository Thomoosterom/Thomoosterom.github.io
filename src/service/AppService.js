import { createStore, combineReducers } from 'redux';
import { CursusReducers } from './CursusReducers';
// import { ToetsReducers } from './ToetsReducers';


const rootReducer = combineReducers(
  {
    cursusReducer: CursusReducers,
    // toetsReducer: ToetsReducers

  }
)
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
