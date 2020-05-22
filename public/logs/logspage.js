getData();
searchData();
var placeArray = [];
var placeMarker = [];

  console.log(placeMarker);

// PopulateDropDownList();


// initMap();



function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


async function getData() {

  const queryString = window.location.search;
  console.log(queryString);

  const root = document.createElement('table');
  root.setAttribute("id", "tableStyle");
  const tr = document.createElement('tr');
  const heading = document.createElement('th');
  heading.textContent = `Space name`;
  const heading2 = document.createElement('th');
  heading2.textContent = `Space Type`;
  const heading7 = document.createElement('th');
  heading7.textContent = `Capacity`;
  const heading3 = document.createElement('th');
  heading3.textContent = `Provider`;
  const heading4 = document.createElement('th');
  heading4.textContent = `Phone`;
  const heading5 = document.createElement('th');
  heading5.textContent = `Price`;
  const heading6 = document.createElement('th');
  heading6.textContent = `Image`;
  root.append(tr);
  tr.append(heading, heading2, heading7, heading3, heading4, heading5, heading6 );


  const response = await fetch('/location'+queryString);
  const data = await response.json();

  if (!data || !data.length) {
    // array or array.length are falsy
    // ⇒ do not attempt to process array
      console.log("no item");

      const tr1 = document.createElement('tr');
      const link = document.createElement('a');
      const spaceName = document.createElement('td');
      const spaceType = document.createElement('td');
      const capacity = document.createElement('td');
      const provider = document.createElement('td');
      const phone = document.createElement('td');
      const price = document.createElement('td');
      const avatar = document.createElement('img');

      root.append(tr1);
      tr1.append(spaceName,spaceType, capacity,provider, phone,price, avatar);

      spaceName.textContent = "No Results Found";
      // spaceType.textContent = "" ;
      // capacity.textContent = "" ;
      // provider.textContent ="" ;
      // phone.textContent = "";
      // price.textContent = "" + "";
      avatar.src = "";




      var theDiv = document.getElementById("result");

      theDiv.appendChild(root);



    }


  for (item of data) {

    const tr1 = document.createElement('tr');
    const link = document.createElement('a');
    const spaceName = document.createElement('td');
    const spaceType = document.createElement('td');
    const capacity = document.createElement('td');
    const provider = document.createElement('td');
    const phone = document.createElement('td');
    const price = document.createElement('td');
    const avatar = document.createElement('img');

    tr1.setAttribute("data-link", "./public/search0.html");

    tr1.setAttribute("data-value", `${item._id}` );
    tr1.setAttribute("onclick","myFunction((this).getAttribute('data-value'))" );

    spaceName.textContent = `${item.name}`;
    spaceType.textContent = `${item.spacetype}`;
    capacity.textContent = `${item.capacity}`;
    provider.textContent = `${item.provider}`;
    phone.textContent = `${item.phone}`;
    price.textContent = "£" + `${item.price}`;
    avatar.src = `${item.avatar}`;

    root.append(tr1);
    tr1.append(spaceName,spaceType, capacity,provider, phone,price, avatar);

    var theDiv = document.getElementById("result");
    theDiv.appendChild(root);

    placeMarker.push({
        "title" : `${item.name}`,
        "lat" : `${item.geometrylat}`,
        "lng"  : `${item.geometrylng}`,
        "description" : `${item.provider}`
    });

  }
  // console.log(data);
       LoadMap();
}
  console.log(placeMarker);

// async function PopulateDropDownList() {
//       const response = await fetch('/spaces');
//       const data = await response.json();
//    var ddlCustomers = document.getElementById("ddlCustomers");
//   for (var i = 0; i < data.length; i++) {
//     var option = document.createElement("OPTION");
//       option.innerHTML = data[i].spacetype;
//       option.value = data[i].spacetype;
//        ddlCustomers.options.add(option);
//
//
//
//   }
// }
async function myFunction(x) {
  window.open('/singlespace?id='+x);
}


async function updateTextInput(val) {
          document.getElementById('textInput').value=val;
        }

async function searchData() {
          const response = await fetch('/spaces');
          const data = await response.json();
  for (item of data) {
          const provider1 = `${item.place}`;
          if (placeArray.indexOf(provider1) === -1) placeArray.push(provider1);
          console.log(provider1)
          console.log(placeArray)
        }
}




function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

autocomplete(document.getElementById("locationSearch"), placeArray);



// var placeMarker = {
//     latLng: []
// };
//
// for(var i in someData) {
//
//     var item = someData[i];
//
//     placeMarker.latLng.push({
//         "latV" : `${data.geometrylat}`,
//         "lngV"  : `${data.geometrylng}`
//     });
// }


// var map;
//      function initMap() {
//        map = new google.maps.Map(document.getElementById('map'), {
//          zoom: 8,
//          center: new google.maps.LatLng(51,-1),
//          mapTypeId: 'terrain'
//        });
//              // for (item of placeMarker){
//              //    var latVal = parseFloat(`${item.latV}`);
//              //    var lngVal = parseFloat(`${item.lngV}`);
//              //    console.log(latVal)
//              //    var marker = new google.maps.Marker({position: {lat: latVal, lng: lngVal} , map: map});
//              //  }
//
//        // var latVal = `${data.geometrylat}`;
//        // var lngVal = `${data.geometrylng}`;
//        // var marker = new google.maps.Marker({position: {lat: latVal, lng: lngVal} , map: map});
//
// }

// var obj = { 'France': 'Paris', 'England': 'London' };
// Iterate over the property names:
// for (let key of Object.keys(placeMarker)) {
//     var lat1 = placeMarker[key];
//     console.log(key, lat1);
//        // var marker = new google.maps.Marker({position: {lat: latVal, lng: lngVal} , map: map});
// }

// for (const [key, lat1] of Object.entries(placeMarker))
//     console.log(key, lat1);

// console.log(placeMarker);


// function addmarker(){
//       for (item of placeMarker){
//          var latVal = `${item.latV}`;
//          var lngVal = `${item.lngV}`;
//          var marker = new google.maps.Marker({position: {lat: latVal, lng: lngVal} , map: map});
//        }
//      }
//
// addmarker();
//

// var marker, i;
// for (i = 0; i < placeMarker.length; i++) {
//   marker = new google.maps.Marker({
//     position: new google.maps.LatLng({lat: i.latVal, lng: i.lngVal} ),
//     map: map
//   });
// }
// window.onload = function () {
  // console.log(placeMarker);

 // }

function LoadMap() {
  console.log(placeMarker);
            var center = new google.maps.LatLng(50, 1);

            if (placeMarker.length > 0){

              var center = new google.maps.LatLng({lat: parseFloat(placeMarker[0].lat), lng: parseFloat(placeMarker[0].lng)});
            }

        var mapOptions = {
            center: center,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var infoWindow = new google.maps.InfoWindow();
        var latlngbounds = new google.maps.LatLngBounds();
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        for (var i = 0; i < placeMarker.length; i++) {
            if ( isNaN(parseFloat(placeMarker[i].lng)) || isNaN(parseFloat(placeMarker[i].lat))){
              i++;
              console.log(i);
            }
            var data = placeMarker[i]
            var myLatlng = new google.maps.LatLng(data.lat, data.lng);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: data.title
            });
            (function (marker, data) {
                google.maps.event.addListener(marker, "click", function (e) {
                    infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + data.description + "</div>");
                    infoWindow.open(map, marker);
                });
            })(marker, data);
            latlngbounds.extend(marker.position);
        }
        var bounds = new google.maps.LatLngBounds();
        map.setCenter(latlngbounds.getCenter());
        map.fitBounds(latlngbounds);
    }
