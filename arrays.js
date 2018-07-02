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
  return chocolateBars.unshift(`${element}`);
}

function addElementToEndOfArray(chocolateBars, element) {
  return [...chocolateBars, `${element}`];
}

function destructivelyAddElementToEndOfArray(chocolateBars, element) {
  return chocolateBars.push(`${element}`);
}

function accessElementInArray() {
  
}
