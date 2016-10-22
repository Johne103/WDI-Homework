$(function() {
    getCars();
    $('form').on('submit', createCar);
});

const addCar = (car) => {
  $('#cars').prepend(`<li>${car.make} - <em>${car.style}</em></li>`);
};

const getCars = () => {
  $.ajax({
    method: 'GET',
    url: "https://ga-doughnuts.herokuapp.com/doughnuts"
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
    url: "https://ga-doughnuts.herokuapp.com/doughnuts",
    data: $('form').serialize()
  }).done((data) => {
    addCar(data);
  });
};
