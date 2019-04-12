function TodoTask() {
  const controller = this;



  controller.addTask = function(task) {
    // this function adds a task to the to-do list based on the add task box
    let newTask = {};
    newTask.task = task;
    newTask.completed = false;
    controller.todoList.push(newTask);
    $scope.addTaskValue = null;
  }

  controller.removeTask = function(removed) {    
    // this function removes a task from the to-do list based on clicking the "x" 
    controller.todoList.splice(removed, 1);
  }


}

angular.module('TodoApp').component('todoTask', { // this has to be lowercase here. keep it the same as line 1
  template: `

  <ol class="to-do-list-container">
  <li ng-cloak class="to-do-list-item" ng-repeat="todo in $ctrl.task | filter:search" ng-class="{ 'completed' : todo.completed === true }">
    
    <div class="to-do-list-item-inner">
      <button ng-if="todo.completed === false" id="completed" class="button-complete-task" ng-click="$ctrl.completeTask($index)">Complete</button>
      
      <div class="to-do-list-item-content">{{ todo.task }}</div>
      <div>
        <i class="material-icons" id="close-button" ng-click="$ctrl.removeTask($index)">clear</i>
      </div>
    </div>
  </li>
</ol>
  `, // or use templateUrl   
  controller: TodoTask,
  bindings: {
    task: '<',
    completeTask: '&', 
  }
});