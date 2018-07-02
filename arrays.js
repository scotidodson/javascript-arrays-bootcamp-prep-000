var ingredient1 = "bread";
var ingredient2 = "mild cheese";
var ingredient3 = "sharp cheese";
var ingredient4 = "butter";
var ingredient5 = "tomato";
var ingredient6 = "garlic";

var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
];
 
var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
];

var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];
 
// `${array}[${element}]`

function addElementToBeginningOfArray(chocolateBars, element) {
  return [`${element}`, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element) {
  chocolateBars.unshift(`${element}`);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, index) {
  return [...chocolateBars, `${index}`];
}

function destructivelyAddElementToEndOfArray(chocolateBars, element) {
  chocolateBars.push(`${element}`);
  return chocolateBars;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars, element) {
  chocolateBars.shift(element);
  return chocolateBars;
}