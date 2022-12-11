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