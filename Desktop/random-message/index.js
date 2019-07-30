var options = ["apples with peanut butter", "apples with nutella", "cookies", "greek yogurt",
"trail mix", "veggies", "Cheese stick", "almonds or peanuts", "pita chips with hummus",
"protein bar", "chocolate chip bar", "granola", "pudding", "avocado", "salad", "french fries",
"chocolate chip bar", "oatmeal", "toast"];

var getsnack = $('.snacks');
var newSnack = $('.newSnacks');
var food = $('.food');

getsnack.on("click", chooseSnack);
newSnack.on("click", changeSnack);

function chooseSnack() {
  var random = Math.floor(Math.random() * options.length);
  var final = options[random];
  food.text(final);
}

function changeSnack() {
  var random = Math.floor(Math.random() * options.length);
  var final = options[random];
  food.text(final);
}
