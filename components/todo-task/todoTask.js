function TodoTask() {
  const ctrl = this;

  
  ctrl.completeTask = function(taskList, completedItem) {
    // this function sets a task to completed based on the user clicking complete
    console.log(`complete task called on index: ${ completedItem }`);
    taskList[completedItem].completed = true;
  }

  ctrl.removeTask = function(taskList, removedItem) {    
    // this function removes a task from the to-do list based on clicking the "x"
    console.log(`removed task called on index: ${ removedItem }`); 
    taskList.splice(removedItem, 1);
  }

}

angular.module('TodoApp').component('todoTask', { // this has to be lowercase here. keep it the same as line 1
  template: `

  <ol class="to-do-list-container">
  <li ng-cloak class="to-do-list-item" ng-repeat="todo in $ctrl.task | filter:search" ng-class="{ 'completed' : todo.completed === true }">
    
    <div class="to-do-list-item-inner">
      <button ng-if="todo.completed === false" id="completed" class="button-complete-task" ng-click="$ctrl.completeTask($ctrl.task, $index)">Complete</button>
      
      <div class="to-do-list-item-content">{{ todo.task }}</div>
      <div>
        {{ $index }}
        <i class="material-icons" id="close-button" ng-click="$ctrl.removeTask($ctrl.task, $index)">clear</i>
      </div>
    </div>
  </li>
</ol>
  `, // or use templateUrl   
  controller: TodoTask,
  bindings: {
    task: '<'
  }
});