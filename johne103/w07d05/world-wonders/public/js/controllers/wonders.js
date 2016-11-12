angular.module('wonderApp')
  .controller('WondersIndexController', WondersIndexController)
  .controller('WondersNewController', WondersNewController)
  .controller('WondersShowController', WondersShowController)
  .controller('WondersEditController', WondersEditController);

WondersIndexController.$inject = ['Wonder'];
function WondersIndexController(Wonder){
  const wondersIndex = this;

  wondersIndex.all = Wonder.query();
}

WondersNewController.$inject = ['Wonder', '$state'];
function WondersNewController(Wonder, $state) {
  const wondersNew = this;

  wondersNew.wonder = {};

  function createWonder() {
    Wonder.save(wondersNew.wonder, ()=> {
      $state.go('wondersIndex');

    });

  }
  wondersNew.create = createWonder;
}

WondersShowController.$inject = ['Wonder', '$state'];
function WondersShowController(Wonder, $state) {
  const wondersShow = this;

  console.log($state.params);

  wondersShow.wonder = Wonder.get($state.params);

  function remove() {
    Wonder.remove({ id: wondersShow.wonder._id }, () =>{
      $state.go('wondersIndex');
    });
  }
  wondersShow.delete = remove;
}

WondersEditController.$inject = ['Wonder', '$state'];
function WondersEditController(Wonder, $state) {
  const wondersEdit = this;

  wondersEdit.wonder = Wonder.get($state.params);

  function update() {
    Wonder.update({ id: wondersEdit.wonder._id}, wondersEdit.wonder, () => {
      $state.go('wondersShow', $state.params);
    });
  }

  wondersEdit.update = update;
}
