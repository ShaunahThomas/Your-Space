getData();


async function getData() {
  
  const response = await fetch('/api');
  const data = await response.json();

  const root = document.createElement('table');
  root.setAttribute("id", "tableStyle");
  const tr = document.createElement('tr');
  const heading = document.createElement('th');
  heading.textContent = `Space name`;
  const heading2 = document.createElement('th');
  heading2.textContent = `Space Type`;
  const heading3 = document.createElement('th');
  heading3.textContent = `Provider`;
  root.append(tr);
  tr.append(heading, heading2, heading3);


  for (item of data) {
    // const root = document.createElement('table');
    const tr1 = document.createElement('tr');
    const spaceName = document.createElement('td');
    const spaceType = document.createElement('td');
    const provider = document.createElement('td');
    // const geo = document.createElement('td');
    // const date = document.createElement('td');
   
    // const image = document.createElement('img');

    spaceName.textContent = `${item.name}`;
    spaceType.textContent = `${item.spacetype}`;
    provider.textContent = `${item.provider}`;
    // geo.textContent = `${item.lat}°, ${item.lon}°`;
    // const dateString = new Date(item.timestamp).toLocaleString();
    // date.textContent = dateString;
    // image.src = item.image64;
    // image.alt = 'Dan Shiffman making silly faces.';

    // tr.appendChild(td);
    // table1.append(spaceName,spaceType, geo, date);
    root.append(tr1);
    tr1.append(spaceName,spaceType, provider);
    // document.body.append(root);


    var theDiv = document.getElementById("result");
    // var content = document.createTextNode("<YOUR_CONTENT>");
    theDiv.appendChild(root);


  }
  console.log(data);






}