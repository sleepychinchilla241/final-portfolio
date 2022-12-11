import React from 'react';
import './webdevstyles.css';

const apiRequest = async () => { 
    const PORT_NUMBER = "8010";
  
    const baseUrl = `http://localhost:${PORT_NUMBER}/proxy/api/`
  
    const endpoint = "fruit/all"
  
    const response = await fetch(baseUrl + endpoint, { 
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  
    console.log(response);
  
    return response.json();
  }
  
  const updatePage = async () => {
    const gallery = document.getElementById('cs1300-gallery');
    const tableE = document.createElement('table');
  
    const fruitsArray = await apiRequest();
    console.log(fruitsArray);
  
    const outputFruits = fruitsArray.filter(fruit => {return fruit.nutritions.sugar >15;});
  
    var mytable = "<table>\n<tr>\n";
    for(var CELL of outputFruits){
      mytable +="</tr>\n<tr>";
      mytable += "<td>" + CELL.name + "</td>\n";
      mytable += "<td>" + CELL.nutritions.sugar + "</td>\n";
    }
    mytable += "</tr>\n</table>";
  
    tableE.innerHTML = mytable;
    gallery.append(tableE);
  
  }
  
  const exampleAddElement = () => {
    const newElement = document.createElement('div');
    newElement.innerHTML = "this text is inside a div";
  
    const existingElement = document.getElementById('example-id');
    existingElement.append(newElement);
  }

const Webdev = () => {
    return (
        <div>
          <div id="cs1300-gallery">
            <h1>Welcome to my bakery</h1>
            <p>Here are my favourite desserts!</p>
            <div class="gallery-item-container">
                <img class="gallery-item" src={process.env.PUBLIC_URL + "/assets2/brownie.jpeg"} alt="Frosted brownies"/>
                <img class="gallery-item" src={process.env.PUBLIC_URL + "/assets2/choc_cupcakes.jpeg"} alt="Chocolate cupcakes"/>
                <img class="gallery-item" src={process.env.PUBLIC_URL + "/assets2/cake.jpg"} alt="Oreo cake"/>
            </div>
            <div class="gallery-item-container">
                <img class="gallery-item" src={process.env.PUBLIC_URL + "/assets2/choux.jpg"} alt="Choux pastry"/>
                <img class="gallery-item" src={process.env.PUBLIC_URL + "/assets2/chocolate-croissant.jpg"} alt="Chocolate croissant"/>
                <img class="gallery-item" src={process.env.PUBLIC_URL + "/assets2/macaron.jpeg"} alt="Assorted macarons"/>
            </div>
            <div class="gallery-item-container">
                <img class="gallery-item" src={process.env.PUBLIC_URL + "/assets2/Basically-Strawberry-Shortcake-Beauty.jpg"} alt="Strawberry Shortcake"/>
                <img class="gallery-item" src={process.env.PUBLIC_URL + "/assets2/pi.jpeg"} alt="Apple pie"/>
                <img class="gallery-item" src={process.env.PUBLIC_URL + "/assets2/Pineapple-Upside-Down-Cake-2_8.jpg"} alt="Pineapple Upside Down Cake"/>
            </div>
            <button onclick={updatePage()}>Press this button to display some fruit data</button>  
         </div>
        </div>
    );
};

export default Webdev;