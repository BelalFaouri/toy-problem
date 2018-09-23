/* Given a string, remove any characters that are not unique from the string.

Examples
------------------------------------
Input                 |	Output
------------------------------------
str:                  |
"abccdefe"            | "abdf"
------------------------------------
str:                  |
"hello there"         | "o tr"
------------------------------------
str:                  |
"xyz"	              | "xyz"
------------------------------------
str:                  |
"iiii"                |	""
------------------------------------
*/

function onlyUnique (str) {
  var letters={};
  var uniqueLetters='';
  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if(!letters[char]){
      letters[char] = 1;
    }else{
      letters[char]++
    }
  }

  for (var i = 0; i < str.length; i++) {
    if(letters[str[i]] === 1){
      uniqueLetters+=str[i]
    }
  }
  return uniqueLetters
}
