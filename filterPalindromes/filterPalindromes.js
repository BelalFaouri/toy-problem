//Given an array of words (array of strings), return all words that are palindromes.
// Example: filterPalindromes([ "word", "Ana", "race car" ])
// output: [ "Ana", "race car" ]




function reverseWord(word){
  return word.toLowerCase().split('').reverse().join('')
}



function filterPalindromes (words) {
  var newArr=[];

  for (var i = 0; i < words.length; i++) {
    var word = words[i]

    if(word.toLowerCase().replace(/\s/g, '') === reverseWord(word).replace(/\s/g, '')){
      newArr.push(word)
    }
  }
  return newArr
}
