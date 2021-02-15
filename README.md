# _This project is not in a complete or portfolio ready state, and should not be considered representational of professional work._

# _To Do List_

#### _A web-based To Do List application_

#### By _**Shanen Cross and Jessica R. Williams**_

## Technologies Used

* _Bootstrap Library_
* _CSS_
* _HTML_
* _JavaScript_
* _jQuery Library_

## Description

_Users may add To Do List tasks to the list, mark the tasks as completed, change task status back to incomplete, and delete tasks._

## Setup/Installation Requirements

* _Open the terminal on your local machine_
* _Navigate to the directory inside of which you wish to house this project_
* _Clone this project with the following git command `$ git clone <https://github.com/jessicarubinwilliams/to-do-list>`_
* _Navigate to the top level of the repository with the command `$ cd to-do-list`_
* _Open index.html in the browser of your choice with the command `$ open index.html`_.

## Tests

Describe: Task()
Test: "It will create Task instances with description and isComplete properties"
Expect(let task1 = new Task()).toEqual(Task {description: "", isComplete: false});

Test: "It will take an argument and create Task instances with that string as the value of the description property key"
Expect((let task1 = new Task("Sweep the kitchen")).toEqual(Task {description: "Sweep the kitchen", isComplete: false}));

Describe: Task.prototype.completeTask()
Test: "It will change the value of Task property key isComplete to true"
Expect((task1.completeTask()).toEqual(Task {description: "Sweep the kitchen", isComplete: true}))

Describe: Task.prototype.undoCompleteTask()
Test: "It will change the value of Task property key isComplete to false"
Expect((task1.undoCompleteTask()).toEqual(Task {description: "Sweep the kitchen", isComplete: false}))

Describe: Task.prototype.editDescription()
Test: "It will take an argument and change the value of Task property that argument"
Expect((task1.undoCompleteTask("Sweep and mop the kitchen")).toEqual(Task {description: "Sweep and mop the kitchen", isComplete: false}))

Describe: List()
Test: "It will create List instances with task and currentId properties"
Expect((let list1 = new List()).toEqual(List {tasks: {}, currentId: 0}));

Describe: List.prototype.addTask(task1)
Test: "It will take a Task as an argument, add the Task to the List as a property of the List, assign an id value to the task, and call the assignID method"
Expect((list1.addTask()).toEqual(List {tasks: {Task {description: "Sweep the kitchen"}, isComplete: False, id: 1}, currentId: 1}))

Describe: List.prototype.findTask
Test: "It will take a Task ID value as an argument and return that Task"
Expect((list1.findTask(task1.id)).toEqual(Task {description: "Sweep the kitchen"}, isComplete: False, id: 1))

Test: "It will take a Task ID value as an argument and if there is not task with that ID value, it will return false"
Expect((list1.findTask(task2.id)).toEqual(false)

Describe: List.prototype.removeTask
Test: "It will take a Task as an argument and remove that task from the list"
Expect((list1.removeTask()).toEqual(List {tasks: {}, currentId: 1}))

## Known Bugs

* _This application is still in development and not yet working_

## License
*[MIT](https://choosealicense.com/licenses/mit/)*
Copyright (c) **_2021 Shanen Cross, Jessica R. Williams_**
## Contact Information
**_Shanen Cross, (Jessica R. Williams [mailto](mailto:jessicarubinwilliams@gmail.com)_**
