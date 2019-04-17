function TodoFilter() {
  const controller = this;
}

angular.module('TodoApp').component('todoFilter', { // this has to be lowercase here. keep it the same as line 1
  template: `
      <input type="text" placeholder="Filter your to-dos" ng-model="$ctrl.search" class="input-box" />
  `, // or use templateUrl   
  controller: TodoFilter,
  bindings: {
    search: '=',
  }
});