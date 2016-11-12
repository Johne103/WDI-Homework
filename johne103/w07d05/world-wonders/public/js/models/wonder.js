angular.module('wonderApp')
  .factory('Wonder', Wonder);

Wonder.$inject = ['$resource'];
function Wonder($resource) {
  return new $resource('/wonders/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
