import { combineReducers } from 'redux';
import ExplorerReducer from './ExplorerReducer';

export default combineReducers({
  explorer: ExplorerReducer,
});
