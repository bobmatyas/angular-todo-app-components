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

  //this is a test passing "my_name to the component todoList.js"
  ctrl.my_name = ctrl.todoListItems[0].task;
  

}

angular.module('TodoApp').component('todoList', { // this has to be lowercase here (becomes todo-list in html). keep it the same as line 1
  template: `
      <div class="main-container">
        <h1 class="app-title">TODO List</h1>
        <h2 class="tag-line">A place to store the things you have to do!</h2>
      
        <todo-filter task="ctrl.todoListItems"></todo-filter>
        <todo-task task="$ctrl.todoListItems"></todo-task>
        <todo-add task="$ctrl.todoListItems"></todo-add>

      </div>
  `, // or use templateUrl   
  controller: TodoList
});