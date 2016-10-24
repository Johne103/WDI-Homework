console.log('js loaded');

var googleMap = googleMap || {};

googleMap.getRestaurant = function () {
  $.get("http://localhost:3000/api/restaurants")
  .done(this.loopThroughRestaurants);
};

googleMap.addInfoWindowForRestaurant = function (restaurant, marker) {
  google.maps.event.addListener(marker, 'click',() => {
    if(this.infowindow) {
      this.infowindow.close();
    }
    this.infowindow = new google.maps.InfoWindow({
    content: `<img src="${restaurant.image}"><p>${restaurant.name}</p><small>${restaurant.description}</small>`
  });
  this.infowindow.open(this.map, marker);
});
};

googleMap.mapSetup = function() {
  let canvas = document.getElementById("map-canvas");

  let mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(51.5, -0.08),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  this.map = new google.maps.Map(canvas, mapOptions);
  this.getRestaurant();
};

googleMap.createMarkerForRestaurant = (restaurant) => {
  let latLng = new google.maps.LatLng(restaurant.lat, restaurant.lng);
  let marker = new google.maps.Marker({
    position: latLng,
    map: googleMap.map,
});

  googleMap.addInfoWindowForRestaurant(restaurant, marker);
};

googleMap.loopThroughRestaurants = (data) => {
  $.each(data.restaurants, (index, restaurant) => {
    googleMap.createMarkerForRestaurant(restaurant);
  });
};

$(googleMap.mapSetup.bind(googleMap));

// You will need to get your GoogleMaps API key
// Make a request to the API to get all of the restaurants
// Display then on the page with GMaps
// BONUS: Mark your current location on the map
// BONUS BONUS: Add restul routes
