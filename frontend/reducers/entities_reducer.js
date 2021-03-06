import { combineReducers } from 'redux';

import carsReducer from './cars_reducer';
import usersReducer from './users_reducer';
import rentalsReducer from './rentals_reducer';
import reviewsReducer from './reviews_reducer';

export default combineReducers({
  users: usersReducer,
  cars: carsReducer,
  rentals: rentalsReducer,
  reviews: reviewsReducer
});
