getData();









function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}











async function getData() {
  var number = getUrlVars()["id"];

  const response = await fetch('/spaces/'+number);
  const data = await response.json();

  const root = document.createElement('div');
  root.setAttribute("class", "card");

    const banner = document.createElement('div');
    const spaceName = document.createElement('h1');

      // spaceName.setAttribute("class", "title");

    const descriptionStyle = document.createElement('div');
    const spaceType = document.createElement('p');
    const capacity = document.createElement('p');
    const provider = document.createElement('p');
    const phone = document.createElement('p');
    const address = document.createElement('p');


    const lat = document.createElement('p');
    const lng = document.createElement('p');

    const price = document.createElement('p');
    const description = document.createElement('p');
    const startdate = document.createElement('p');
    const enddate = document.createElement('p');
    const starttime = document.createElement('p');
    const endtime = document.createElement('p');

    const photo = document.createElement('div');
    const avatar = document.createElement('img');

    // const div1 = document.createElement('div');
    // div1.setAttribute("id", "#section-right");

    // <button onclick="showContent()">Show content</button>
    // const geo = document.createElement('td');
    // const date = document.createElement('td');

    // const avatar = document.createElement('img');

    banner.setAttribute("class", "banner");
    banner.append(spaceName);

    photo.setAttribute("class", "photo");
    photo.append(avatar);

    descriptionStyle.setAttribute("class", "description");
    descriptionStyle.append(spaceType, capacity, provider, phone, address, lat, lng, price, description, startdate, enddate, starttime, endtime);


    spaceName.textContent = `Space Name: ${data.name}`;
    spaceType.textContent = `Space Type: ${data.spacetype}`;
    capacity.textContent = `Capacity: ${data.capacity}`;
    provider.textContent = `Provider: ${data.provider}`;
    phone.textContent = `Phone: ${data.phone}`;
    address.textContent = `Address: ${data.address}`;
    lat.textContent = `lat: ${data.geometrylat}`;
    lng.textContent = `lng: ${data.geometrylng}`;
    price.textContent = `Price: £${data.price}`;
    description.textContent = `Description: ${data.description}`;
    startdate.textContent = `Start Date: ${data.startdate}`;
    enddate.textContent = `End Date: ${data.enddate}`;
    starttime.textContent = `Start Time: ${data.starttime}`;
    endtime.textContent = `End Time: ${data.endtime}`;
    avatar.src = `${data.avatar}`;

    // geo.textContent = `${item.lat}°, ${item.lon}°`;
    // const dateString = new Date(item.timestamp).toLocaleString();
    // date.textContent = dateString;
    // avatar.src = item.avatar64;
    // avatar.alt = 'Dan Shiffman making silly faces.';

    // tr.appendChild(td);
    // table1.append(spaceName,spaceType, geo, date);



  // root.append(heading,spaceName, heading2, spaceType, heading3, provider, heading4, phone, heading5, avatar );

  // div1.append(avatar);
  root.append(banner, descriptionStyle, photo);

    // root.append(spaceName,spaceType, capacity, provider, phone, address, description, startdate, enddate, div1);


    // document.body.append(root);


    var theDiv = document.getElementById("singleResult");
    // var content = document.createTextNode("<YOUR_CONTENT>");
    theDiv.appendChild(root);



  console.log(data);






}
