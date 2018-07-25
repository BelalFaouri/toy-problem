/**
 * Write a function `commonCharacters(str1, str2)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `str1`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

//Works for any number of input strings:
var commonCharacters = function(string1, string2) {
  var commonObj={};
  var resStr='';
  for (var i = 0; i < string2.length; i++) {
    if(!commonObj[string2[i]]){
      commonObj[string2[i]] = 1
    }else{
      commonObj[string2[i]]++
    }
  }

  for (var j = 0; j < string1.length; j++) {
    if(commonObj[string1[j]] && string1[j] !== ' '){
      resStr+=string1[j]
      delete commonObj[string1[j]]
    }
  }
  return resStr
};
