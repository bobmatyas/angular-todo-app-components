function TodoAdd() {
  const controller = this;
}

angular.module('TodoApp').component('todoAdd', { // this has to be lowercase here. keep it the same as line 1
  template: `
    <form ng-submit="$ctrl.addTask(addTaskValue)">
      <input ng-model="addTaskValue" type="text" placeholder="Add your to do" class="input-box">
      <button type="submit" class="button-add-task">Add</button>
    </form>
  `, // or use templateUrl   
  controller: TodoAdd,
});