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

  for (var i = 0; i < str.length; i++) {
    if(str[i] === '(' || str[i] === '[' || str[i] === '{'){
      stack.push(str[i])
    }
    if(str[i] === ')'){
      var latestItem=stack.pop()

      if(latestItem === '[' || latestItem === '{'){
        return false
      }else{
        stack.pop()
      }
    }
    if(str[i] === ']'){
      var latestItem=stack.pop()

      if(latestItem === '(' || latestItem === '{'){
        return false
      }else{
        stack.pop()
      }
    }
    if(str[i] === '}'){
      var latestItem=stack.pop()

      if(latestItem === '[' || latestItem === '('){
        return false
      }else{
        stack.pop()
      }
    }
  }
  if(stack.length !== 0){
    return false
  }

  return true;
}
