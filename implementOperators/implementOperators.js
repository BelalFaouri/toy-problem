/*  Write three functions to replace the multiply, divide, and modulo operators.
The only operators you may only use in your solution are addition and subtraction.
Your functions will only have to handle integer math.
Note: Don’t put any complex math in the comments in your code, or the tests may fail.
EXAMPLES:
multiply(5, 2) === 10
divide(5, 2) === 2
modulo(5, 2) === 1  */
var multiply = function(x, y) {
  var result=0;

  for (var i = 0; i < y; i++) {
    result+=x
  }
  return result;
}


var divide = function(x, y) {
  var result=0;

while (x >= y) {
  result++
  x-=y
}

return result


}

var modulo = function(x, y) {

  while (x>=y) {
    x-=y
  }

return x


}
