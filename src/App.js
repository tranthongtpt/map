import React, { Component } from 'react';
import GoogleMapReact  from 'google-map-react';
import './App.css';
import Restaurant from './components/restaurant';
import Marker from './components/marker';
import { Input } from 'antd';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      allRestaurants: [],
      selectedRestaurant: null,
      search: ""
    };
  }

  componentDidMount() {
    const url = "https://nico-create.github.io/Data/kagurazaka-restaurants.json"
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          restaurants: data,
          allRestaurants: data
        });
      })
  }

  selectRestaurant = (restaurant) => {
    console.log(restaurant);
    this.setState({
      selectedRestaurant: restaurant
    })
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      restaurants: this.state.allRestaurants.filter((restaurant) => new RegExp(event.target.value, "i").exec(restaurant.name))
    });
  }

  render() {
    let center = {
      lat: 35.7015,
      lng: 139.7403
    }

    if (this.state.selectedRestaurant) {
      center = {
        lat: this.state.selectedRestaurant.lat,
        lng: this.state.selectedRestaurant.lng
      }
    }

    const restaurant = {
      "name": "Cool Restaurant",
      "imageUrl": "https://images.unsplash.com/photo-1451153378752-16ef2b36ad05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmxhdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      "price": 2000,
      "priceCurrency": "JPY",
      "lat": 35.7015,
      "lng": 139.7403
    };

    const restaurants = [restaurant, restaurant, restaurant, restaurant];

    return (
      <div className="App">
        <div className="main">
          <div className="search">
            <Input
              type="text"
              placeholder="Search..."
              value={this.state.search}
              onChange={this.handleSearch} />
          </div>
          <div className="restaurants">
            {this.state.restaurants.map((restaurant) => {
              return <Restaurant
                key={restaurant.name}
                restaurant={restaurant}
                selectRestaurant={this.selectRestaurant} />
            })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
            center={center}
            zoom={17}
          >
            {this.state.restaurants.map((restaurant) => {
              return <Marker
                key={restaurant.name}
                lat={restaurant.lat}
                lng={restaurant.lng}
                text={restaurant.price}
                selected={restaurant === this.state.selectedRestaurant} 
                />
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
