'use strict';

console.log('js loaded');

var googleMap = googleMap || {};

googleMap.getRestaurant = function () {
  $.get("http://localhost:3000/api/restaurants").done(this.loopThroughRestaurants);
};

googleMap.addInfoWindowForRestaurant = function (restaurant, marker) {
  var _this = this;

  google.maps.event.addListener(marker, 'click', function () {
    if (_this.infowindow) {
      _this.infowindow.close();
    }
    _this.infowindow = new google.maps.InfoWindow({
      content: '<img src="' + restaurant.image + '"><p>' + restaurant.name + '</p><small>' + restaurant.description + '</small>'
    });
    _this.infowindow.open(_this.map, marker);
  });
};

googleMap.mapSetup = function () {
  var canvas = document.getElementById("map-canvas");

  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(51.5, -0.08),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  this.map = new google.maps.Map(canvas, mapOptions);
  this.getRestaurant();
};

googleMap.createMarkerForRestaurant = function (restaurant) {
  var latLng = new google.maps.LatLng(restaurant.lat, restaurant.lng);
  var marker = new google.maps.Marker({
    position: latLng,
    map: googleMap.map
  });

  googleMap.addInfoWindowForRestaurant(restaurant, marker);
};

googleMap.loopThroughRestaurants = function (data) {
  $.each(data.restaurants, function (index, restaurant) {
    googleMap.createMarkerForRestaurant(restaurant);
  });
};

$(googleMap.mapSetup.bind(googleMap));

// You will need to get your GoogleMaps API key
// Make a request to the API to get all of the restaurants
// Display then on the page with GMaps
// BONUS: Mark your current location on the map
// BONUS BONUS: Add restul routes