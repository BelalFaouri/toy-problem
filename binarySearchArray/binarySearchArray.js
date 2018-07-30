/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 7, 15, 27], 27);
 * console.log(index); // 4
 */

var binarySearch = function (array, target) {
  var startIndex=0
  var endIndex=array.length-1;
  var midIndex=Math.floor(array.length/2)
  var resIndex;
  function search(startIndex,endIndex,midIndex){

    if(array[midIndex] === target){
      resIndex=midIndex;
    }else if (array[midIndex] > target) {
      console.log('here');
      endIndex=midIndex;
      midIndex=Math.floor(midIndex/2)
      search(startIndex,endIndex,midIndex)
    }else if (array[midIndex] < target) {
      startIndex=midIndex
      midIndex=Math.floor((endIndex-startIndex)/2)
      search(startIndex,endIndex,midIndex)
    }
  }
  return resIndex
};
