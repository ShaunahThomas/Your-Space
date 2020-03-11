getData();






async function getData() {

  const response = await fetch('/spaces/5e67e4b65b84c81b0375d6e5');
  const data = await response.json();

  const root = document.createElement('div');
  root.setAttribute("class", "card");
  // const tr = document.createElement('p');
  // const heading = document.createElement('h1');
  // heading.textContent = `Space name:`;
  // const heading2 = document.createElement('p');
  // heading2.textContent = `Space Type:`;
  // const heading3 = document.createElement('p');
  // heading3.textContent = `Provider:`;
  // const heading4 = document.createElement('p');
  // heading4.textContent = `Phone:`;
  // const heading5 = document.createElement('p');
  // heading5.textContent = `avatar`;
  // root.append(heading, heading2, heading3, heading4, heading5 );




    // const root = document.createElement('table');
    // const tr1 = document.createElement('p');
    const spaceName = document.createElement('h1');

      // spaceName.setAttribute("class", "title");
    const spaceType = document.createElement('p');
    const provider = document.createElement('p');
    const phone = document.createElement('p');
    const avatar = document.createElement('img');
    const div1 = document.createElement('div');


    // <button onclick="showContent()">Show content</button>
    // const geo = document.createElement('td');
    // const date = document.createElement('td');

    // const avatar = document.createElement('img');

    spaceName.textContent = `Space Name: ${data.name}`;
    spaceType.textContent = `Space Type: ${data.spacetype}`;
    provider.textContent = `Provider: ${data.provider}`;
    phone.textContent = `Phone: ${data.phone}`;
    avatar.src = `${data.avatar}`;

    // geo.textContent = `${item.lat}°, ${item.lon}°`;
    // const dateString = new Date(item.timestamp).toLocaleString();
    // date.textContent = dateString;
    // avatar.src = item.avatar64;
    // avatar.alt = 'Dan Shiffman making silly faces.';

    // tr.appendChild(td);
    // table1.append(spaceName,spaceType, geo, date);



  // root.append(heading,spaceName, heading2, spaceType, heading3, provider, heading4, phone, heading5, avatar );

  div1.append(avatar);

    root.append(spaceName,spaceType, provider, phone, div1);


    // document.body.append(root);


    var theDiv = document.getElementById("result");
    // var content = document.createTextNode("<YOUR_CONTENT>");
    theDiv.appendChild(root);



  console.log(data);






}
