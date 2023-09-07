function main() {
  task1 = new Task('task1', 'sample description for task1','type', 'September 6th 2023', 'label')
  task2 = new Task('task2', 'sample description for task2','type', 'September 6th 2023', 'label')
  task3 = new Task('task3', 'sample description for task3','type', 'September 6th 2023', 'label')
  task4 = new Task('task4', 'sample description for task4','type', 'September 6th 2023', 'label')

  console.log(task1);
  // console.log(task2);
  // console.log(task3);
  // console.log(task4);
}

class Task {
  constructor(name, description, type, dueDate, label) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.dueDate = dueDate;
    this.label = label;
  }
}

// main();

