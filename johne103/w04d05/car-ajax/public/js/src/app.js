$(function() {
    getCars();
    $('form').on('submit', createCar);
});

const addCar = (car) => {
  $('#car').prepend(`<li>${car.make} - <em>${car.model} - <em>${car.color}</em></li>`);
};

const getCars = () => {
  $.ajax({
    method: 'GET',
    url: "http://localhost:8000/cars"
  })
  .done((data) => {
    console.log(data);
    $.each(data, (index, car) => {
      addCar(car);
    });
  });
};

const createCar = (e) => {
  e.preventDefault();

  $.ajax({
    method: 'POST',
    url: "http://localhost:8000/cars",
    data: $('form').serialize()
  }).done((data) => {
    addCar(data);
  });
};
