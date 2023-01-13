import React from "react";
import "./restaurant.css";

class Restaurant extends React.Component {
  handleClick = () => {
    this.props.selectRestaurant(this.props.restaurant);
  }
  render() {
    const title = this.props.restaurant.price
      + this.props.restaurant.priceCurrency +
      " - " + this.props.restaurant.name;

    const style = {
      backgroundImage: `url('${this.props.restaurant.imageUrl}')`
    };

    return (
      <div className="restaurant" onClick={this.handleClick}>
        <div className="restaurant-picture" style={style}></div>
        <div className="restaurant-title"></div>
        {title}
      </div>
    );
  }
}

export default Restaurant;
