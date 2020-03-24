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

// async function getQueryParams(){
//     try{
//         url = window.location.href;
//         query_str = url.substr(url.indexOf('?')+1, url.length-1);
//         r_params = query_str.split('&');
//         params = {}
//         for( i in r_params){
//             param = r_params[i].split('=');
//             params[ param[0] ] = param[1];
//         }
//         return params;
//     }
//     catch(e){
//        return {};
//     }
// }

// function getUrlVars1()
// {
//     var vars = [], hash;
//     var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
//     for(var i = 0; i < hashes.length; i++)
//     {
//         hash = hashes[i].split('=');
//         vars.push(hash[0]);
//         vars[hash[0]] = hash[1];
//     }
//     return vars;
// }

// var params = getUrlVars1();
// // const response = await fetch('/location/'+locationSearchV);
// for i in params{
//   console.log(i);
// }



async function getData() {


    // var locationSearch = getUrlVars()["locationSearch"];
    //     var capacitySearch = getUrlVars()["capacitySearch"];
   // locationSearch = document.getElementById("locationSearch").value;
   // capacitySearch = document.getElementById("capacitySearch").value;
   // spaceTypeSearch = document.getElementById("spaceTypeSearch").value;

  // const response = await fetch('/location/'+locationSearchV);


const queryString = window.location.search;
console.log(queryString);
  // if (params){
  //     const response = await fetch('/location'params);
  // }


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
  // var PATTERN = 'bedroom',
  //     filtered = myArray.filter(function (str) { return str.includes(PATTERN); });

  // const arr2 = data.filter(function (str) { return str.includes(locationSearch); });
// filter by capacity
  // const arr1 = data.filter(d => d.capacity >= capacitySearch );
  // console.log('arr1', arr1);

  for (item of data) {

    // if(${item.capacity}== 4){
    //   console.log("this item");
    // }
    // locationSearch = document.getElementById("locationSearch").value;




    // const root = document.createElement('table');
    const tr1 = document.createElement('tr');
    const link = document.createElement('a');
    const spaceName = document.createElement('td');
    const spaceType = document.createElement('td');
    const capacity = document.createElement('td');
    const provider = document.createElement('td');
    const phone = document.createElement('td');
    const price = document.createElement('td');
    const avatar = document.createElement('img');
    // const button1 = document.createElement('button');
    // const geo = document.createElement('td');
    // const date = document.createElement('td');
    // const id = item._id;
    // console.log(id);

    // const avatar = document.createElement('img');
tr1.setAttribute("data-link", "./public/search0.html");
// tr1.setAttribute("onclick","myFunction(this.cells[0].textContent)" );
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
    // tr1.append(link)
    tr1.append(spaceName,spaceType, capacity,provider, phone,price, avatar);
    // document.body.append(root);

// spaceName.append(link);






    var theDiv = document.getElementById("result");
    // var content = document.createTextNode("<YOUR_CONTENT>");
    theDiv.appendChild(root);








  }

  console.log(data);
  // console.log(arr1);
    // console.log(arr2);


}







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


// async function locationSearch(x) {
//   locationSearch = document.getElementById("locationSearch").value;
//   alert("value is: " + x);
//     // alert("Row index is: " + x.rowIndex);
//   // window.open("/spaces/" + x);
//
//
//   // alert(this.cells[0].textContent );
//   // alert("Row index is: " + x.rowIndex + x.name);
//
// }
//
//
// async function search(arr, s){
//     var matches = [], i, key;
//
//     for( i = arr.length; i--; )
//         for( key in arr[i] )
//             if( arr[i].hasOwnProperty(key) && arr[i][key].indexOf(s) > -1 )
//                 matches.push( arr[i] );  // <-- This can be changed to anything
//
//     return matches;
// }


//
// model.exports{
//   async function getData1() {
//
//     var capac = document.getElementById("capacitySearch").value;
//     // document.getElementById("demo").innerHTML = x;
//
//
//     const response = await fetch('/spaces');
//     const data = await response.json();
//
//
//
//     const root = document.createElement('table');
//     root.setAttribute("id", "tableStyle");
//     const tr = document.createElement('tr');
//     const heading = document.createElement('th');
//     heading.textContent = `Space name`;
//     const heading2 = document.createElement('th');
//     heading2.textContent = `Space Type`;
//     const heading7 = document.createElement('th');
//     heading7.textContent = `Capacity`;
//     const heading3 = document.createElement('th');
//     heading3.textContent = `Provider`;
//     const heading4 = document.createElement('th');
//     heading4.textContent = `Phone`;
//     const heading5 = document.createElement('th');
//     heading5.textContent = `Price`;
//     const heading6 = document.createElement('th');
//     heading6.textContent = `Image`;
//     root.append(tr);
//     tr.append(heading, heading2, heading7,heading3, heading4, heading5, heading6 );
//
//
//
//     for (item of data) {
//       // const root = document.createElement('table');
//       if (capac <= `${item.capacity}`){
//
//         const tr1 = document.createElement('tr');
//         const link = document.createElement('a');
//         const spaceName = document.createElement('td');
//         const spaceType = document.createElement('td');
//         const capacity = document.createElement('td');
//         const provider = document.createElement('td');
//         const phone = document.createElement('td');
//         const price = document.createElement('td');
//         const avatar = document.createElement('img');
//         // const button1 = document.createElement('button');
//         // const geo = document.createElement('td');
//         // const date = document.createElement('td');
//         // const id = item._id;
//         // console.log(id);
//
//         // const avatar = document.createElement('img');
//         tr1.setAttribute("data-link", "./public/search0.html");
//     // tr1.setAttribute("onclick","myFunction(this.cells[0].textContent)" );
//         tr1.setAttribute("data-value", `${item._id}` );
//         tr1.setAttribute("onclick","myFunction((this).getAttribute('data-value'))" );
//       //spaceid.textContent = `${item._id}`;
//         spaceName.textContent = `${item.name}`;
//         // tr1.setAttribute("value", `${item._id}` );
//         spaceType.textContent = `${item.spacetype}`;
//         capacity.textContent = `${item.capacity}`;
//         provider.textContent = `${item.provider}`;
//         phone.textContent = `${item.phone}`;
//         price.textContent = `${item.price}`;
//         avatar.src = `${item.avatar}`;
//         // link.setAttribute("href","www.google.com");
//         // button1.setAttribute("class", "tableButton");
//         // button1.textContent = 'More Information';
//         // geo.textContent = `${item.lat}°, ${item.lon}°`;
//         // const dateString = new Date(item.timestamp).toLocaleString();
//         // date.textContent = dateString;
//         // avatar.src = item.avatar64;
//         // avatar.alt = 'Dan Shiffman making silly faces.';
//
//         // tr.appendChild(td);
//         // table1.append(spaceName,spaceType, geo, date);
//         root.append(tr1);
//         // tr1.append(link)
//         tr1.append(spaceName,spaceType, capacity, provider, phone,price, avatar);
//         // document.body.append(root);
//
//     spaceName.append(link);
//   }else {
//     console.log("nothing mathes");
//   }
//   };
// }
// }
// }
//
//
//
//
//
//
//         var theDiv = document.getElementById("result");
//         // var content = document.createTextNode("<YOUR_CONTENT>");
//         theDiv.appendChild(root);
// }
//
//
//
//
//
//
//
//     }
//
//     console.log(data);
//
//
//   }
















// function onRowClick(tableId, callback) {
//     var table = document.getElementById(tableId),
//         rows = table.getElementsByTagName("tr"),
//         i;
//     for (i = 0; i < rows.length; i++) {
//         table.rows[i].onclick = function (row) {
//             return function () {
//                 callback(row);
//             };
//         }(table.rows[i]);
//     }
// };





// $(function () {
//     $('tableStyle.table tr').click(function () {
//         window.location.href = $(this).data('url');
//     });
// })






// var table = document.getElementById('tableStyle');
//
// for(var i = 1; i < table.rows.length; i++)
// {
//     table.rows[i].onclick = function()
//     {
//          //rIndex = this.rowIndex;
//          document.getElementById("fname").value = this.cells[0].innerHTML;
//          document.getElementById("lname").value = this.cells[1].innerHTML;
//          document.getElementById("age").value = this.cells[2].innerHTML;
//     };
// }


// $('#tableStyle').find('tr').click( function(){
//   alert('You clicked row '+ ($(this).index()+1) );
// });

//old below
// function initMap() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 8,
//     center: {lat: -34.397, lng: 150.644}
//   });
//   var geocoder = new google.maps.Geocoder();
//
//   document.getElementById('submit').addEventListener('click', function() {
//     geocodeAddress(geocoder, map);
//   });
// }
//
// function geocodeAddress(geocoder, resultsMap) {
//   var address = document.getElementById('address').value;
//   geocoder.geocode({'address': address}, function(results, status) {
//     if (status === 'OK') {
//       resultsMap.setCenter(results[0].geometry.location);
//       var marker = new google.maps.Marker({
//         map: resultsMap,
//         position: results[0].geometry.location
//       });
//     } else {
//       alert('Geocode was not successful for the following reason: ' + status);
//     }
//   });
// }


///new below
// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 2,
//     center: new google.maps.LatLng(2.8,-187.3),
//     mapTypeId: 'terrain'
//   });
//
//   // Create a <script> tag and set the USGS URL as the source.
//   var script = document.createElement('script');
//   // This example uses a local copy of the GeoJSON stored at
//   // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
//   script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
//   document.getElementsByTagName('head')[0].appendChild(script);
// }
//
// // Loop through the results array and place a marker for each
// // set of coordinates.
// window.eqfeed_callback = function(results) {
//   for (var i = 0; i < results.features.length; i++) {
//     var coords = results.features[i].geometry.coordinates;
//     var latLng = new google.maps.LatLng(coords[1],coords[0]);
//     var marker = new google.maps.Marker({
//       position: latLng,
//       map: map
//     });
//   }
// }















































              // for (var i = 0; i < data.length; i++) {
              //   var option = document.createElement("OPTION");
              //   option.value = data[i].spaceId;
              //   ddlCustomers.options.add(option);
              //
              // }



    // function PopulateDropDownList() {
    //        //Build an array containing Customer records.
    //         var customers = [
    //             { CustomerId: 1, Name: "John Hammond", Country: "United States" },
    //             { CustomerId: 2, Name: "Mudassar Khan", Country: "India" },
    //             { CustomerId: 3, Name: "Suzanne Mathews", Country: "France" },
    //             { CustomerId: 4, Name: "Robert Schidner", Country: "Russia" }
    //         ];
    //
    //         var ddlCustomers = document.getElementById("ddlCustomers");
    //
    //         //Add the Options to the DropDownList.
    //         for (var i = 0; i < customers.length; i++) {
    //             var option = document.createElement("OPTION");
    //
    //             //Set Customer Name in Text part.
    //             option.innerHTML = customers[i].Name;
    //
    //             //Set CustomerId in Value part.
    //             option.value = customers[i].CustomerId;
    //
    //             //Add the Option element to DropDownList.
    //             ddlCustomers.options.add(option);
    //         }
    //     }
