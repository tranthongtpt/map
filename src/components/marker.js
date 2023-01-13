import React from "react";
import './marker.css'
import {FiMapPin} from 'react-icons/fi'
class Marker extends React.Component {
  
  render() {
    let classes = "marker";
    if (this.props.selected) {
      classes += " selected";
    }
    
    return (
        <div class="map-markers">    
          <div class="map-marker">
            <FiMapPin class="test"/>
              <div class="map-marker-info">
                <div class="map-marker-info-inner animate-bounce-in">
                  <main>
                    <h1>Custom Marker content</h1>
                    <p>Custom Market Description</p>
                    <button class="button">Custom Button</button>
                  </main>
                </div>
              </div>
          </div>
        </div>
    )
  }
}

export default Marker;
