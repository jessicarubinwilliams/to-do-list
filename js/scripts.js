function Task (description) {
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