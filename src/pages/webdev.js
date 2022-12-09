import React from 'react';
import Helmet from 'react-helmet';
import 'webdevstyles.css';
import 'webdevapp.js';

const Webdev = () => {
    return (
        <div>
          <Helmet>
            <script src="webdevapp.js"></script>
          </Helmet>
          <div id="cs1300-gallery">
            <h1>Welcome to my bakery</h1>
            <p>Here are my favourite desserts!</p>
            <div class="gallery-item-container">
                <img class="gallery-item" src="./assets/brownie.jpeg" alt="Frosted brownies"/>
                <img class="gallery-item" src="./assets/choc_cupcakes.jpeg" alt="Chocolate cupcakes"/>
                <img class="gallery-item" src="./assets/cake.jpg" alt="Oreo cake"/>
            </div>
            <div class="gallery-item-container">
                <img class="gallery-item" src="./assets/choux.jpg" alt="Choux pastry"/>
                <img class="gallery-item" src="./assets/chocolate-croissant.jpg" alt="Chocolate croissant"/>
                <img class="gallery-item" src="./assets/macaron.jpeg" alt="Assorted macarons"/>
            </div>
            <div class="gallery-item-container">
                <img class="gallery-item" src="./assets/Basically-Strawberry-Shortcake-Beauty.jpg" alt="Strawberry Shortcake"/>
                <img class="gallery-item" src="./assets/pi.jpeg" alt="Apple pie"/>
                <img class="gallery-item" src="./assets/Pineapple-Upside-Down-Cake-2_8.jpg" alt="Pineapple Upside Down Cake"/>
            </div>
            <Helmet>
                <button onclick="updatePage()">Press this button to display some fruit data</button>  
            </Helmet>
         </div>
        </div>
    );
};

export default Webdev;