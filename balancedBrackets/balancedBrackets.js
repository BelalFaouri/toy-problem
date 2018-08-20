//Given a string, return true if its arrangement of parenthesis (),
//curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).
//Examples:
//Input:"(x + y) - (4)"
//output:true
//input:"(((10 ) ()) ((?)(:)))"
//output:true
//input:"[{()}]"
//output:true
//input:"(50)("
//output:false
//input:"[{]}"
//output:false

function isBalanced (str) {
  var stack=[],
   openingBrackets=['[', '{', '('],
   closingBrackets=[']','}',')'],
   matchingBracket

   for (var i = 0; i < str.length; i++) {
     var char=str[i];

     if(closingBrackets.indexOf(char) > -1){
       matchingBracket = openingBrackets[closingBrackets.indexOf(char)]

       if(stack.length ===0 || stack.pop() !== matchingBracket){
         return false
       }
     }else if (openingBrackets.indexOf(char) > -1){
       stack.push(char)
     }
   }
  return stack.length === 0

}
