function TodoAdd() {
  const ctrl = this;
  
  ctrl.addTask = function(taskObject, task) {
    // this function adds a task to the to-do list based on the add task box
    console.log(`Add Task called`);
    let newTask = {};
    newTask.task = task;
    newTask.completed = false;
    taskObject.push(newTask);
    // this doesn't work now: $scope.addTaskValue = null;
  }


}

angular.module('TodoApp').component('todoAdd', { // this has to be lowercase here. keep it the same as line 1
  template: `
    <form ng-submit="$ctrl.addTask($ctrl.task, addTaskValue)">
      <input ng-model="addTaskValue" type="text" placeholder="Add your to do" class="input-box">
      <button type="submit" class="button-add-task">Add</button>
    </form>
  `, // or use templateUrl   
  controller: TodoAdd,
  bindings: {
    task: '<',
  }
});