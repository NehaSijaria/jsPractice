const conditionalSum = function(values, condition) {
  // Your code here
  const filteredArr = values.filter(value => value%2===0)
  
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));