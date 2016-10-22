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
    url: "https://ga-doughnuts.herokuapp.com/doughnuts"
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
    url: "https://ga-doughnuts.herokuapp.com/doughnuts",
    data: $('form').serialize()
  }).done(function (data) {
    addCar(data);
  });
};
