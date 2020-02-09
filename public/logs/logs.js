getData();

async function getData() {
  const response = await fetch('/api');
  const data = await response.json();

  // for (item of data) {
  //   const root = document.createElement('p');
  //   const spaceName = document.createElement('div');
  //   const spaceType = document.createElement('div');
  //   const geo = document.createElement('div');
  //   const date = document.createElement('div');
  //   const image = document.createElement('img');

  //   spaceName.textContent = `spaceName: ${item.spaceName}`;
  //   spaceType.textContent = `spaceType: ${item.spaceType}`;
  //   geo.textContent = `${item.lat}°, ${item.lon}°`;
  //   const dateString = new Date(item.timestamp).toLocaleString();
  //   date.textContent = dateString;
  //   // image.src = item.image64;
  //   // image.alt = 'Dan Shiffman making silly faces.';

  //   root.append(spaceName,spaceType, geo, date);
  //   // document.body.append(root);


  //   var theDiv = document.getElementById("result");
  //   // var content = document.createTextNode("<YOUR_CONTENT>");
  //   theDiv.appendChild(root);


  // }
  // console.log(data);




  // <tr>
  //   <th>Company</th>
  //   <th>Contact</th>
  //   <th>Country</th>
  // </tr>
  const root = document.createElement('table');
  root.setAttribute("id", "tableStyle");
  const tr = document.createElement('tr');
  const heading = document.createElement('th');
  heading.textContent = `Space name`;
  const heading2 = document.createElement('th');
  heading2.textContent = `Space Type`;
  const heading3 = document.createElement('th');
  heading3.textContent = `Location`;
  const heading4 = document.createElement('th');
  heading4.textContent = `Long,lat`;
  const heading5 = document.createElement('th');
  heading5.textContent = `Date, Time`;
  root.append(tr);
  tr.append(heading, heading2, heading3, heading5 );


  for (item of data) {
    // const root = document.createElement('table');
    const tr1 = document.createElement('tr');
    const spaceName = document.createElement('td');
    const spaceType = document.createElement('td');
    const location = document.createElement('td');
    // const geo = document.createElement('td');
    const date = document.createElement('td');
   
    // const image = document.createElement('img');

    spaceName.textContent = `${item.spaceName}`;
    spaceType.textContent = `${item.spaceType}`;
    location.textContent = `${item.location}`;
    // geo.textContent = `${item.lat}°, ${item.lon}°`;
    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = dateString;
    // image.src = item.image64;
    // image.alt = 'Dan Shiffman making silly faces.';

    // tr.appendChild(td);
    // table1.append(spaceName,spaceType, geo, date);
    root.append(tr1);
    tr1.append(spaceName,spaceType, location, date);
    // document.body.append(root);


    var theDiv = document.getElementById("result");
    // var content = document.createTextNode("<YOUR_CONTENT>");
    theDiv.appendChild(root);


  }
  console.log(data);











  function addTable() {
    var myTableDiv = document.getElementById("myDynamicTable");
  
    var table = document.createElement('TABLE');
    table.border = '1';
  
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);



  
    for (var i = 0; i < data.length; i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
  
      for (var j = 0; j < 4; j++) {
        var td = document.createElement('TD');
        td.width = '75';
        
        // td.appendChild(document.textContent = `spaceName: ${item.spaceName}`);
         td.appendChild(document.createTextNode("Cell " + i + "," + j));
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
  }
  addTable();



}
