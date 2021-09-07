import {combineReducers} from 'redux';
import theme from './theme';
import pagination from './pagination';
import currentPage from './currentPage';

export default combineReducers({
  // combine reducers here
  theme,
  pagination,
  currentPage,
});
