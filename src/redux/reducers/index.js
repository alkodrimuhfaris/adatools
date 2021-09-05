import {combineReducers} from 'redux';
import theme from './theme';
import pagination from './pagination';

export default combineReducers({
  // combine reducers here
  theme,
  pagination,
});
