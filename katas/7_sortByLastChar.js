//'i am going to market ===> ['am', 'going', 'i', 'market', 'to']
function last(x){
  let arrStr = x.split(' ');
  //str.sort();
  const sorting = (a,b) => {
    return  a[a.length - 1].charCodeAt(0) - b[b.length - 1].charCodeAt(0);
  }
  arrStr.sort(sorting)
  console.log(arrStr);
}

console.log(last('this is some sample string'));