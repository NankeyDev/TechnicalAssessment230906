// Technical Assessment
// 9-6-23
// Author NankeyDev

function main() {

}

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('WebApp');
}

function AddRecord(taskName, taskdescription, tasktype, taskduedate, tasklabel) {
  var url = 'https://docs.google.com/spreadsheets/d/1LvLY5RBwm3nUqr-GBK5C0Q8ylX8uOSaTUzJG7jAXsDc/edit#gid=0';
  var ss = SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("Sheet1");
  webAppSheet.appendRow([taskName, taskdescription, tasktype, taskduedate, tasklabel]);
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