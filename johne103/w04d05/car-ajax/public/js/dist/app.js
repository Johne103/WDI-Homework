'use strict';

$(function () {
  getCars();
  $('form').on('submit', createCar);
});

var addCar = function addCar(car) {
  $('#cars').prepend('<li>' + car.make + ' - <em>' + car.model + '</em> - <em>' + car.color + '</em></li>');
};

var getCars = function getCars() {
  $.ajax({
    method: 'GET',
    url: "http://localhost:8000/cars"
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
    url: "http://localhost:8000/cars",
    data: $('form').serialize()
  }).done(function (data) {
    addCar(data);
  });
};