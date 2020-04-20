getData();
// PopulateDropDownList();

// initMap();



function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


async function getData1() {
      document.getElementById('tableStyle').remove();
      getData()
}



function initMap(){
  // Map options
  var options = {
    zoom:8,
    center:{lat:42.3601,lng:-71.0589}
  }

  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Listen for click on map
  google.maps.event.addListener(map, 'click', function(event){
    // Add marker
    addMarker({coords:event.latLng});
  });

  /*
  // Add marker
  var marker = new google.maps.Marker({
    position:{lat:42.4668,lng:-70.9495},
    map:map,
    icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  });

  var infoWindow = new google.maps.InfoWindow({
    content:'<h1>Lynn MA</h1>'
  });

  marker.addListener('click', function(){
    infoWindow.open(map, marker);
  });
  */

  // Array of markers
  // var markers = [
  //   {
  //     coords:{lat:42.4668,lng:-70.9495},
  //     iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
  //     content:'<h1>Lynn MA</h1>'
  //   },
  //   {
  //     coords:{lat:42.8584,lng:-70.9300},
  //     content:'<h1>Amesbury MA</h1>'
  //   },
  //   {
  //     coords:{lat:42.7762,lng:-71.0773}
  //   }
  // ];
  //
  // // Loop through markers
  // for(var i = 0;i < markers.length;i++){
  //   // Add marker
  //   addMarker(markers[i]);
  // }

  // Add Marker Function
  function addMarker(props){
    var marker = new google.maps.Marker({
      position:props.coords,
      map:map,
      //icon:props.iconImage
    });

    // Check for customicon
    if(props.iconImage){
      // Set icon image
      marker.setIcon(props.iconImage);
    }

    // Check content
    if(props.content){
      var infoWindow = new google.maps.InfoWindow({
        content:props.content
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
    }
  }
}


var markers = [];

// Loop through markers

async function getData() {



const queryString = window.location.search;
console.log(queryString);





  const response = await fetch('/spaces);

  const data = await response.json();



  for (item of data) {

    const lat1 = `${item.geometrylat}`;
    const lng1 = `${item.geometrylng}`;

markers.push(coords:{lat:lat1,lng:lng1});





  }

  console.log(data);
  // console.log(arr1);
    // console.log(arr2);


}






async function myFunction(x) {
  // const response1 = await fetch('/spaces/'+ x);
  alert("value is: " + x);
    // alert("Row index is: " + x.rowIndex);
  // window.open("/spaces/" + x);
  // window.open('/search2.html?locationSearch='+x);
  window.open('/singlespace?id='+x);
  // alert(this.cells[0].textContent );
  // alert("Row index is: " + x.rowIndex + x.name);

}


async function updateTextInput(val) {
          document.getElementById('textInput').value=val;
        }
