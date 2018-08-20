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
  var stack=[];
  var isBalanced=true;
  var match={
  ')':'(',
  ']':'[',
  '}':'{'
  }

  for (var i = 0; i < str.length; i++) {
     if (str[i] === ')') {
      if(match[str[i]] === stack.pop()){
        stack.pop()
      }else{
        return false
      }
    }else if (str[i] === ']') {
      if(match[str[i]] === stack.pop()){
        stack.pop()
      }else{
        return false
      }
    }else if (str[i] === '}') {
      if(match[str[i]] === stack.pop()){
        stack.pop()
      }else{
        return false
      }
    }else{

        stack.push(str[i]);

    }
  }

  return stack.length === 0


}
// for (var i = 0; i < str.length; i++) {
//   var char=str[i]
//
//   if(char === '(' || char === '[' || char === '{'){
//     stack.push(char);
//   }else if (char === ')' || char === ']' || char === '}') {
//     if(stack.pop() === match[char]){
//       stack.pop()
//     }else if (match[char] !== stack.pop()) {
//       isBalanced=false;
//     }
//   }
// }
// return  isBalanced && (stack.length === 0);
