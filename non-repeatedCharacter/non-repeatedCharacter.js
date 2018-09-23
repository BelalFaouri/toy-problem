/*
Given an arbitrary input string, return the first non-repeating character.
For strings with all repeats, return 'sorry'.

Examples
-------------------------------------------------
Input                                	Output
-------------------------------------------------
string:
"ABCDBIRDUP"	                         "A"

string:
"XXXXXXX"	                           "sorry"

string:
"ALAMABA"	                             "L"

string:
"BABA"	                               "sorry"
-------------------------------------------------
*/

function firstNonRepeatedCharacter (string) {
  var letters={};

   for (var i = 0; i < string.length; i++) {
     var char = string[i]

     if(!letters[char]){
       letters[char] = 1;
     }else{
       letters[char]++
     }
   }

   for (var j = 0; j < string.length; j++) {
     if(letters[string[j]] === 1){
       return string[j]
     }
   }
   return 'sorry'
}
