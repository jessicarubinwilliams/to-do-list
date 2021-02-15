function List() {
  this.tasks = {};
  this.currentId = 0;
}

List.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

List.prototype.addTask = function(task) {
  task.id = this.assignId(); //creates a new id property in the task object. The value of the new id property is the List's new currentId value (from the return value of .assignId()).
  this.tasks[task.id] = task //when the Task is added to List uses a Task's new id property as a new key within the List's tasks object. The value of that key is the Task object itself.
}

List.prototype.findTask = function(id) { //
  if (this.tasks[id] != undefined) { //.tasks plural as referencing tasks property of List, not referencing the task object directly
    return this.tasks[id];
  } else {
    return false;
  }
}

List.prototype.deleteTask = function(id) {
  if (this.tasks[id] === undefined) {
    return false;
  }
  delete this.tasks[id];
  return true; //Is this return value needed? When is it used?
}

function Task(description) {
  this.description = description;
  this.isComplete = false;
}

//When Task.prototype.completeTask is called in UIL it should also change something about the appearance -- Add a checkmark in front of it? Add "Completed: " in front of it? $.addclass()?
Task.prototype.completeTask = function() { 
  this.isComplete = true;
  //Does it need to return true? Will that return value need to be utilized?
}

//When Task.prototype.undoCompleteTask is called in UIL it should also change something about the appearance -- Remove whatever .completeTask() added $.removeclass()?
Task.prototype.undoCompleteTask = function() {
  this.isComplete = false;
  //Does it need to return true? Will that return value need to be utilized?
}

Task.prototype.editDescription = function(newDescription) {
  this.description = newDescription;
  //Does it need to return true? Will that return value need to be utilized?
}