// 'use strict';

$(function () {
  getCars();
  $('form').on('submit', createCar());
});

var addCar = function addCar(car) {
  $('#cars').prepend('<li>' + car.make + ' - <em>' + car.style + '</em></li>');
};

var getCars = function getCars() {
  $.ajax({
    method: 'GET',
    url: "mongodb://localhost/car"
  }).done(function (data) {
    console.log(data);
    $.each(data, function (index, car) {
      addCar(car);
    });
  });
};

var createCar = function createCar(e) {
  e.preventDefault();

  $.ajax({
    method: 'POST',
    url: "mongodb://localhost/car",
    data: $('form').serialize()
  }).done(function (data) {
    addCar(data);
  });
};
