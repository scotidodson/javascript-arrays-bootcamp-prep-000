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

function addElementToBeginningOfArray(array, element) {
  return [`${element}, ...${array}`];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  `${array}`.unshift(`${element}`);
  return console.log(`${array}`)
}

function addElementToEndOfArray(array, element) {
  return  ;
}

function destructivelyAddElementToEndOfArray(array, element) {
  return `${array}.push("${element}")`;
}