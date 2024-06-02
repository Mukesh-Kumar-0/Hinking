import React from 'react';
import './Mountaineering.css';
import hikerImage from './hike5.jpg'; 
const Mountaineering = () => {
  return (
    <div className="mountaineering-container">
      <div className="image-section">
        <img src={hikerImage} alt="Hiker" className="hiker-image" />
        <p className="image-caption">Walking in nature as a recreational activity</p>
      </div>
      <div className="text-section">
        <h2>Mountaineering Ice Climbing</h2>
        <h3>2. Activities</h3>
        <p>
          Kundalini is the most classic yoga. Its origin is in the Raya Yoga of Patanjali
          and other classical texts such as Bhagavad Gita and Hatha Yoga Pradipika.
        </p>
        <hr />
        <p>17 modules divided into 5 weekends</p>
        <div className="details">
          <p>Start<br />April 15<br />20.00 hs</p>
          <p>Price<br />$900</p>
        </div>
      </div>
    </div>
  );
}

export default Mountaineering;
