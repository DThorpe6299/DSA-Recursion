/** product: calculate the product of an array of numbers. */

function product(nums, i=0){
  if(i === nums.length) return 1;
  return nums[i]*product(nums, i+1);
}


/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, maxLen = 0) {
  if (i === words.length) return maxLen;
  return longest(words, i + 1, Math.max(maxLen, words[i].length));
}




/** everyOther: return a string with every other letter. */

function everyOther(str, i=0){
  if(i >= str.length) return '';
  return str[i] + everyOther(str, i+2)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  if (i >= str.length / 2) {
      return true;
  }
  if (str[i] !== str[str.length - 1 - i]) {
      return false;
  }
  return isPalindrome(str, i + 1);
}


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if(i=== arr.length) return -1;
 
  if(arr[i] === val){
      return i;
  }else{
      return findIndex(arr, val, i+1)
  }
}



/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0) {
  if(i === str.length) return '';
  
  return str[str.length-1-i] + revString(str, i+1)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringList = [];
  for(let key in obj){
    let val = obj[key]
    if (typeof val === 'object' && val !== null) {
        stringList = stringList.concat(gatherStrings(val));
    } else if (typeof val === 'string') {
        stringList.push(val);
    }
  }
  return stringList;
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === val) return mid;
  if (arr[mid] < val) {
    return binarySearch(arr, val, mid + 1, right);
  } else {
    return binarySearch(arr, val, left, mid - 1);
  }
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
