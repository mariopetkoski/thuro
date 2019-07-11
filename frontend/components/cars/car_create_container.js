import {connect} from 'react-redux';
import {createCar} from '../../actions/car_actions';
import CarCreate from './car_create';

const mapStateToProps = state => ({
  formfields: {
    // owner_id: state.session.id,
    ownerId: state.session.id,
    rate: '',
    make: '',
    model: '',
    year: '',
    color: '',
    transmission: '',
    seats: '',
    mpg: '',
    description: '',
    plate: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    lat: 0,
    lng: 0,
    // awd: false,
    // audio_input: false,
    // bike_rack: false,
    // bluetooth: false,
    // child_seat: false,
    // convertible: false,
    // gps: false,
    // heated_seats: false,
    // longterm_car: false,
    // pet_friendly: false,
    // ski_rack: false,
    // snow_tires_chains: false,
    // sunroof: false,
    // toll_pass: false,
    // usb_input: false,

    awd: false,
    audioInput: false,
    bikeRack: false,
    bluetooth: false,
    childSeat: false,
    convertible: false,
    gps: false,
    heatedSeats: false,
    longtermCar: false,
    petFriendly: false,
    skiRack: false,
    snowTiresChains: false,
    sunroof: false,
    tollPass: false,
    usbInput: false,
    // photo: null
    // photoFile: null
    photos: []
  },
  formType: 'create',
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  createCar: (car) => dispatch(createCar(car))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarCreate);