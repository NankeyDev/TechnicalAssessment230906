// Technical Assessment
// 9-6-23
// Author NankeyDev

// Variables
var spreadsheetURL = 'https://docs.google.com/spreadsheets/d/1LvLY5RBwm3nUqr-GBK5C0Q8ylX8uOSaTUzJG7jAXsDc/edit#gid=0';
var spreadSheetId = '1LvLY5RBwm3nUqr-GBK5C0Q8ylX8uOSaTUzJG7jAXsDc';
var dataRange = "Sheet1!A2:E";

var spreadSheet = SpreadsheetApp.openByUrl(spreadsheetURL);
var sheet = spreadSheet.getSheetByName("Sheet1");

// function doGet(e) {
//   return HtmlService.createHtmlOutputFromFile('WebApp');
// }

// Creates a template from Index.html
function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}

// Adds new record to google sheet (Task Information)
function addRecord(taskName, taskdescription, tasktype, taskduedate, tasklabel) {
  sheet.appendRow([taskName, taskdescription, tasktype, taskduedate, tasklabel]);
}

// Gets data from google sheet and returns as array
// Currently loads once at runtime
function getData() {
  var range = Sheets.Spreadsheets.Values.get(spreadSheetId,dataRange);
  var values = range.values;
  return values;
}

// Task Class
class Task {
  constructor(name, description, type, dueDate, label) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.dueDate = dueDate;
    this.label = label;
  }
}

