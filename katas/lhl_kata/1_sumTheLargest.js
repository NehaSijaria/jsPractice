const sumLargestNumbers = function(data) {
  // Put your solution here
  let newD = data.sort((a,b)=>a-b);
 let largestNumSum = newD[newD.length-1] + newD[newD.length-2]
 return largestNumSum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));