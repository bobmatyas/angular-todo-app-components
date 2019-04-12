function TodoList() {
  const ctrl = this;

  ctrl.todoListItems = [
    {task: 'Walk the dog',
    completed: false,
    },
    {task: 'Go to the store',
    completed: true,
    },
    {task: 'Get gas',
    completed: false,
    },
    {task: 'Wash the car',
    completed: false,
    },
  ];

  ctrl.completeTask = function(completed) {
    // this function sets a task to completed based on the user clicking complete
    controller.todoList[completed].completed = true;
  }

  //this is a test passing "my_name to the component todoList.js"
  ctrl.my_name = ctrl.todoListItems[0].task;
  

}

angular.module('TodoApp').component('todoList', { // this has to be lowercase here (becomes todo-list in html). keep it the same as line 1
  template: `
      <div class="main-container">
        <h1 class="app-title">TODO List</h1>
        <h2 class="tag-line">A place to store the things you have to do!</h2>
      
        <todo-filter></todo-filter>
        <todo-task task="$ctrl.todoListItems" complete-task="$ctrl.completeTask(completed)"></todo-task>
        <todo-add></todo-add>

      </div>
  `, // or use templateUrl   
  controller: TodoList
});