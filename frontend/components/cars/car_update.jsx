import React from 'react';

class CarUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.car;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchCar(this.props.match.params.id);
  }

  navigateToShow() {
    this.props.history.push(`/cars/${car.id}`);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editCar(this.state);
    this.navigateToShow();

  }

  render() {
    return (
      <div className="car-create-container">
        <div className="car-create-banner">
          <h3 className="car-create-banner-text">
            Update your car
          </h3>
        </div>

        <form className="car-create-form-container" onSubmit={this.handleSubmit}>

          <h2>Your Car</h2>

          <br /><br />

          <h3>Where is your car located?</h3>

          <br />

          <label>Address
            <input type="text" placeholder="Address" value={this.state.address} onChange={this.update("address")}></input>
          </label>
          <label>City
            <input type="text" placeholder="City" value={this.state.city} onChange={this.update("city")}></input>
          </label>
          <label>State
            <input type="text" placeholder="State" value={this.state.state} onChange={this.update("state")}></input>
          </label>
          <label>Zip
            <input type="text" placeholder="Zip" value={this.state.zip} onChange={this.update("zip")}></input>
          </label>

          <br /><br />

          <h3>Which car do you have?</h3>

          <br />

          <label htmlFor="">Year
            <input type="text" placeholder="Year" value={this.state.year} onChange={this.update("year")} />
          </label>
          <label htmlFor="">Make
            <input type="text" placeholder="Make" value={this.state.make} onChange={this.update("make")} />
          </label>
          <label htmlFor="">Model
            <input type="text" placeholder="Model" value={this.state.model} onChange={this.update("model")} />
          </label>
          <label htmlFor="">Color
            <input type="text" placeholder="Color" value={this.state.color} onChange={this.update("color")} />
          </label>
          <label htmlFor="">MPG
            <input type="text" placeholder="MPG" value={this.state.mpg} onChange={this.update("mpg")} />
          </label>
          <label htmlFor="">Seats
            <input type="text" placeholder="Seats" value={this.state.seats} onChange={this.update("seats")} />
          </label>
          <label htmlFor="">License plate
            <input type="text" placeholder="License plate" value={this.state.plate} onChange={this.update("plate")} />
          </label>
          <label>Transmission
            <br />
            <input type="radio" value="automatic" name="transmission" onChange={this.update("transmission")} />Automatic&nbsp;
            <input type="radio" value="manual" name="transmission" onChange={this.update("transmission")} />Manual&nbsp;
            <input type="radio" value="none" name="transmission" onChange={this.update("transmission")} />N/A&nbsp;
          </label>

          <br /><br /><br />

          <h2>Car Details</h2>

          <br />

          <label htmlFor="">Daily Rate (USD)
            <input type="text" placeholder="Daily Rate" value={this.state.rate} onChange={this.update("rate")} />
          </label>

          <label>Description
            <textarea placeholder="Description" value={this.state.description} onChange={this.update("description")}>

            </textarea>
          </label>

          {/* <h3>Features</h3>
            <div className="features-wrapper">
              <div>
                <label><input type="checkbox" value="awd" /> All-wheel-drive</label><br/>
                <label><input type="checkbox" value="audio_input" /> Audio input</label><br />
                <label><input type="checkbox" value="bike_rack" /> Bike rack</label><br />
              </div>
              <div>              
                <label><input type="checkbox" value="bluetooth" /> Bluetooth</label><br />
                <label><input type="checkbox" value="child_seat" /> Child seat</label><br />
                <label><input type="checkbox" value="convertible" /> Convertible</label><br />
              </div>
              <div>            
                <label><input type="checkbox" value="gps" /> GPS</label><br />
                <label><input type="checkbox" value="heated_seats"/> Heated seats</label><br/>
                <label><input type="checkbox" value="longterm_car" /> Longterm car</label><br />
              </div>
              <div>            
                <label><input type="checkbox" value="pet_friendly" /> Pet friendly</label><br />
                <label><input type="checkbox" value="ski_rack" /> Ski rack</label><br/>
                <label><input type="checkbox" value="snow_tires_chains" /> Snow tires/Chains</label><br />
              </div>
              <div>            
                <label><input type="checkbox" value="sunroof" /> Sunroof</label><br />
                <label><input type="checkbox" value="tol_pass" /> Toll pass</label><br />
                <label><input type="checkbox" value="usb_input" /> USB input</label><br />
              </div>
            </div>
          <br/><br/> */}

          {/* <h3>Photos</h3> */}

          {/* <input type="file" onChange={this.handleFile.bind(this)} /> */}
          {/* <input type="file" onChange={e => this.setState({ photos: e.target.files })} multiple /> */}

          <br />

          {/* <label htmlFor="">Lat
            <input type="text" placeholder="Lat" value={this.state.lat} onChange={this.update("lat")} />
          </label>
          <label htmlFor="">Lon
            <input type="text" placeholder="Lon" value={this.state.lng} onChange={this.update("lng")} />
          </label> */}

          <input className="car-create-submit-btn" type="submit" value="Finish" />

        </form>

      </div>
    )
  }

}

export default CarUpdate;