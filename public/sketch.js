// function setup() {
//   // noCanvas();
//   // const video = createCapture(VIDEO);
//   // video.size(160, 120);
//   // let lat, lon;
//   const button = document.getElementById('spaceSubmit1');
//   button.addEventListener('click', async event => {
//     const spaceName = document.getElementById('spaceName').value;
//     const spaceType = document.getElementById('spaceType').value;
//     const location = document.getElementById('location').value;
//     // video.loadPixels();
//     // const image64 = video.canvas.toDataURL();
//     const data = { spaceName, spaceType, location};
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     };
//     const response = await fetch('/api', options);
//     const json = await response.json();
//     console.log(json);
//   });

//   if ('geolocation' in navigator) {
//     console.log('geolocation available');
//     navigator.geolocation.getCurrentPosition(position => {
//       lat = position.coords.latitude;
//       lon = position.coords.longitude;
//       console.log(lat, lon);
//       document.getElementById('latitude').textContent = lat;
//       document.getElementById('longitude').textContent = lon;
//     });
//   } else {
//     console.log('geolocation not available');
//   }
// }
