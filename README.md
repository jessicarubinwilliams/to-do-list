# _This project is not in a complete or portfolio ready state, and should not be considered representational of professional work._

# _Application Name_

#### _Brief description of application_

#### By _**Shanen Cross and Jessica R. Williams**_

## Technologies Used

* _Bootstrap Library_
* _CSS_
* _HTML_
* _JavaScript_
* _jQuery Library_

## Description

_This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have. Balance between a summary of the project and a tame market pitch._

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

* _Open the terminal on your local machine_
* _Navigate to the directory inside of which you wish to house this project_
* _Clone this project with the following git command `$ git clone <https://github.com/jessicarubinwilliams/to-do-list>`_
* _Navigate to the top level of the repository with the command `$ cd to-do-list`_
* _Open index.html in the browser of your choice with the command `$ open index.html`_.

_Alternatively,_

* _Direct your browser to a [live version on GitHub Pages.] (jessicarubinwilliams.github.io/to-do-list/index.html)_

_Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again._

## Tests

Describe: List
Test: "It will create a List constructor"
Expect((new List()).toEqual({tasks: {}, currentId: 0}));

Describe: List.prototype.addTask
Test: "It adds a task to the List and assign an id value to the task"
Test argument: "Sweep the floor"
Expect((List { tasks: [], currentId=1 }).toEqual(List { tasks: [ Task { description: "Sweep the floor", id=1 }] }))

Describe: List.prototype.removeTask
Test: "It removes a task from the list"
Expect(List { tasks: [ Task { description: "Sweep", id=1 }]).toEqual(List {tasks: []);

Describe: List.prototype.findTask
Test 1: "It finds the task with the given ID number"
Expect()
Test 2: "If there is no task with the given ID number, it returns false"

Describe: Task
Test: "Task constructor will create a Task object that has an empty description and is incomplete"
Expect(new Task()).toEqual({description: "", isComplete: false});

Test: "Task constructor with a string argument will create a Task object with that string as its description"
Expect((new Task("Sweep the floor")).toEqual({description: "Sweep the floor", isComplete: false}));

## Known Bugs

* _Any known issues_
* _should go here_

## License
*[MIT](https://choosealicense.com/licenses/mit/)*
Copyright (c) **_2021 Shanen Cross, Jessica R. Williams_**
## Contact Information
**_Shanen Cross, (Jessica R. Williams [mailto](mailto:jessicarubinwilliams@gmail.com)_**
