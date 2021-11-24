  //split() turn string to array => ["w", "o", "r", "k"] and reverse on array reverse it => ["k", "r", "o", "w"]
  //join(). will turn array back to string => 'krow'

  //Reversed Strings

  function solution(str){
    return str.split('').reverse().join('');  
  }

  const sol = solution('work');
  console.log(sol);//should return "krow"