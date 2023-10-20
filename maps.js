
var loc = [{ lat: 17, lng: 81 }, { lat: 15, lng: 79 }]
// Check if geolocation is supported by the browser

if ("geolocation" in navigator) {
  // Prompt user for permission to access their location
  navigator.geolocation.getCurrentPosition(
    // Success callback function
    (position) => {
      // Get the user's latitude and longitude coordinates
      const lat = position.coords.latitude;

      const lng = position.coords.longitude;
      // var lat1 = parseFloat(lat);
      // var lng1 = parseFloat(lng);
      initMap(lat, lng);
      // Do something with the location data, e.g. display on a map
      console.log(`Latitude: ${lat}, longitude: ${lng}`);
    },
    // Error callback function
    (error) => {
      // Handle errors, e.g. user denied location sharing permissions
      console.error("Error getting user location:", error);
    }
  );
} else {
  // Geolocation is not supported by the browser
  console.error("Geolocation is not supported by this browser.");
}


let map;

async function initMap(lat1, lng1) {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"),{
    center: { lat: +lat1, lng: +lng1 },
    zoom: 19,
    mapTypeId: "satellite"
  });


  // const pinBackground = new PinElement({
  //   background: "#FBBC04",
  // });

  new google.maps.Marker({
    position: { lat: lat1, lng: lng1 },
    map: map,
    icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
  });

  // for(var i = 0; i < loc.length; i++){
  //   new google.maps.Marker({
  //     position: loc[i],
  //     map: map,
  //   });  
  // }

  for (var i = 1; i < 40; i++)
    loc.push({ lat: lat1 + (0.0001 * i), lng: lng1 + (0.0001 * i) });


  loc.forEach(element => {
    if ((lat1 - 0.001 < element["lat"]) &&(element['lat'] < lat1 + 0.001) && (lng1 - 0.001 < element["lng"]) && (element['lng'] < lng1 + 0.001)) {
      new google.maps.Marker({
        position: element,
        map: map,
      });
    }
  });



  // new google.maps.Marker({
  //   position: loc[0],
  //   map: map
  // });

  // new google.maps.Marker({
  //   position: loc[1],
  //   map: map
  // });



}
function Submit(inp) {

  var dataEntered = retrieveData();
  var readData = readingDataFromLocalStorage(dataEntered);
  if (inp === 0) {
    return Number(readData[0]);
  }
  else {
    return Number(readData[1]);
  }


}

//create
//retrieving data from form

function retrieveData() {
  var lat = document.getElementById("lattitude").value;
  var long = document.getElementById("longitude").value;

  var arr = [lat, long];
  return arr;
}

//Data in local storage
function readingDataFromLocalStorage(dataEntered) {
  //storing data in local storage
  var la = localStorage.setItem("lat", dataEntered[0]);
  var lo = localStorage.setItem("long", dataEntered[1]);


  //getting values from local to table
  var la1 = localStorage.getItem("lat", la);
  var lo1 = localStorage.getItem("long", lo);


  var arr = [la1, lo1];
  return arr;

}


