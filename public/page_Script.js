

  // Get location form
  var locationForm = document.getElementById('location-input');

  // Listen for submiot
  locationForm.addEventListener('change', geocode);

  function geocode(e){
    // Prevent actual submit
    e.preventDefault();

    var location = document.getElementById('location-input').value;

    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
      params:{
        address:location,
        key:'AIzaSyAQwo7_6QZRvTNIgeugv7z0XmQoQKuwgtc'
      }
    })
    .then(function(response){
      // Log full response
      console.log(response);

      // Formatted Address
      var formattedAddress = response.data.results[0].formatted_address;


      // var formattedAddressOutput = `
      //   <ul class="list-group">
      //     <li class="list-group-item">${formattedAddress}</li>
      //   </ul>
      // `;


      // Address Components
      // var addressComponents = response.data.results[0].address_components;
      // var addressComponentsOutput = '<ul class="list-group">';
      // for(var i = 0;i < addressComponents.length;i++){
      //   addressComponentsOutput += `
      //     <li class="list-group-item"><strong>${addressComponents[i].types[0]}</strong>: ${addressComponents[i].long_name}</li>
      //   `;
      // }
      // addressComponentsOutput += '</ul>';



      // administrative_area_level_2

      // var addressComponents = response.data.results[0].address_components;

     // var  administrative_area_level_2_type = addressComponents[0].types[0];
     // var administrative_area_level_2 = addressComponents[0].long_name;

     var filtered_array = response.data.results[0].address_components.filter(function(address_component){
    return address_component.types.includes("administrative_area_level_2");});
    var county = filtered_array.length ? filtered_array[0].long_name: "";

      // var addressComponentsOutput = '<ul class="list-group">';
      // for(var i = 0;i < addressComponents.length;i++){
      //   addressComponentsOutput += `
      //     <li class="list-group-item"><strong>${addressComponents[i].types[0]}</strong>: ${addressComponents[i].long_name}</li>
      //   `;
      // }
      // addressComponentsOutput += '</ul>';

      // Geometry
      var lat = response.data.results[0].geometry.location.lat;
      var lng = response.data.results[0].geometry.location.lng;
      // var geometryOutput = `
      //   <ul class="list-group">
      //     <li class="list-group-item"><strong>Latitude</strong>: ${lat}</li>
      //     <li class="list-group-item"><strong>Longitude</strong>: ${lng}</li>
      //   </ul>
      // `;

      // Output to app
      document.getElementById('formatted-address').value = formattedAddress;
      // document.getElementById('administrative_area_level_2_type').value =  administrative_area_level_2_type;
      // document.getElementById('administrative_area_level_2').value =  administrative_area_level_2;
      document.getElementById('place').value =  county;
      document.getElementById('geometry-lat').value = lat;
      document.getElementById('geometry-lng').value = lng;
    })
    .catch(function(error){
      console.log(error);
    });
  }

  document.getElementById('spaceSubmit').onkeypress = function(e) {
    var key = e.charCode || e.keyCode || 0;
    if (key == 13) {
      e.preventDefault();
    }
  }
