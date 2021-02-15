function Task (description) {
  this.description = description;
  this.isComplete = false;
}

//When Task.prototype.completeTask is called in UIL it should also change something about the appearance -- Add a checkmark in front of it? Add "Completed: " in front of it?
Task.prototype.completeTask = function() { 
  this.isComplete = true;
  //Does it need to return true? Will that return value need to be utilized?
}