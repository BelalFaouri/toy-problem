//Words within Words
//Given an array of unique wordList, find the word that contains the greatest number of other words.
//A word must be at least two letters long.
//input:
//wordList:
//[ "gray", "grays", "ray", "rays", "strays" ]
//output:"grays"

function wordsWithinWords(wordList){
  var obj={};
  var max=0;
  var topWord='';

  for (var i = 0; i < wordList.length; i++) {
    if(!obj[wordList[i]]){
      obj[wordList[i]]=0
    }
  }


    for(var key in obj){
      for (var i = 0; i < wordList.length; i++) {
        if(key.indexOf(wordList[i]) !== -1){
          obj[key]++
        }
      }
  }

  for(var key in obj){
    if(obj[key] > max){
      max = obj[key]
      topWord=key
    }
  }
  return topWord
}
