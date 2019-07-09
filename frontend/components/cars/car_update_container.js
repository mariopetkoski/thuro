import { connect } from 'react-redux';
import { editCar, fetchCar } from '../../actions/car_actions';
import CarUpdate from './car_update';
import {withRouter} from 'react-router-dom';

const mSTP = (state, ownProps) => ({
  cars: state.entities.cars[ownProps.match.params.id],
  errors: state.errors.session,
  formType: 'update'
});

const mDTP = (dispatch) => ({
  editCar: (car) => dispatch(editCar(car)),
  fetchCar: (id) => dispatch(fetchCar(id))
});

export default withRouter(connect(
  mSTP,
  mDTP
)(CarUpdate));