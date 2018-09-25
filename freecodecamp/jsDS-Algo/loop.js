function findLongestWordLength(str) {
  let arr = str.split(" ");
  let max = 0;
  for(let i=0; i<arr.length; i++){
    let len = arr[i].length;
    if(len > max)
      max = len;
  }
  return max;
}

let res = findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(res);