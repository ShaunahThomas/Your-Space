// document.querySelector('#spaceSubmit').addEventListener('submit', (e) => {
//     const formData = new FormData(e.target);
//     // Now you can use formData.get('foo'), for example.
//     // Don't forget e.preventDefault() if you want to stop normal form .submission
//
//     var object = {};
//     formData.forEach((value, key) => {object[key] = value});
//     var json = JSON.stringify(object);
//
//     postData('/spaces', object).then((data) => {
//         console.log(data); // JSON data parsed by `response.json()` call
//       });;
//   });
//
//   // Example POST method implementation:
// async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         'Content-Type': 'application/json',
//         // 'Content-Type': 'image/png'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: 'follow', // manual, *follow, error
//       referrerPolicy: 'no-referrer', // no-referrer, *client
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return await response.json(); // parses JSON response into native JavaScript objects
//   }
//
// //
//
//   document.querySelector('#spaceSubmit').addEventListener('change', event => {
//     handleImageUpload(event)
//   })
//
//
//   const handleImageUpload = event => {
//   const files = event.target.files
//   const formData = new FormData()
//   formData.append('avatar, files[0])
//
//   fetch('/spaces', {
//     method: 'POST',
//     body: formData
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => {
//     console.error(error)
//   })
// }
