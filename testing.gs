const testStrings = [
  "Hello treatment",
  "TREATMENT",
  "Random task title"
]

console.log("TESTING --- Checking if strings containing substrings are correctly identified.");
testStrings.forEach(testContainsText);

function testContainsText(string) {
  if (string.includes("treatment")||string.includes("Treatment")||string.includes("TREATMENT")) {
    console.log("TRUE" + " --- " + "String: " + string);
  } else {
    console.log("FALSE" + " --- " + "String: " + string);
  }
}

