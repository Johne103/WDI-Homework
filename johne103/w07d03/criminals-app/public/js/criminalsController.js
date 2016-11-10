angular.module('criminalsApp')
  .controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];
function CriminalsController($http) {
  const criminals = this;

  criminals.all = [];
  criminals.addCriminal = addCriminal;
  criminals.deleteCriminal = deleteCriminal;
  criminals.newCriminal = {};

  function addCriminal() {
    console.log('Add criminal fired');
    $http.post('/criminals', criminals.newCriminal)
      .then((res) => {
        console.log(res.data);
        criminals.all.push(res.data);
        criminals.newCriminal = {};

        criminals.form.$setPristine();
        criminals.form.$setUntouched();
      })
    .catch(() => {
      console.log('Something went wrong!');
    });
  }

  function getCriminals() {
    console.log('Get criminals');
    $http.get('/criminals')
      .then((res) => {
        criminals.all = res.data;
        console.log(res.data);
      });
  }

  function deleteCriminal(id, $index) {
    $http.delete(`/criminals/${id}`)
      .then(() => {
        criminals.all.splice($index, 1);
      });
  }
  
  getCriminals();
}
