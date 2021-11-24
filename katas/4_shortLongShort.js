// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).



function solution(a, b){
  let str1Len = a.length;
  let str2Len = b.length;
  if(str1Len>str2Len){
    return b+a+b;
  }  else if(str2Len>str1Len){
    return a+b+a;
  }
}

console.log(solution("783","me"))

