//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
  //return x.split('').map(n => n < 5 ? 0 : 1).join('');
  let num = '';
  for(let i=0; i<x.length; i++){
    if(x[i] >= 5) {   
      num += '1';
    } else {
      num += '0';  
    }  
  }  
  return num;
}

let sol = fakeBin('71589');
console.log(sol);