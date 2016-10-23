$(function() {
    getCars();
    $('form').on('submit', createCar);
});

const addCar = (car) => {
  $('#cars').prepend(`<li>${car.make} - <em>${car.model} - <em>${car.colorl}</em></li>`);
};

const getCars = () => {
  $.ajax({
    method: 'GET',
    url: "localhost:8000/cars"
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
    url: "localhost:8000/cars",
    data: $('form').serialize()
  }).done((data) => {
    addCar(data);
  });
};
