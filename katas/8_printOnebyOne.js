//USING setTimeOut Fn:: setTimeOut takes 3 parameter, callback,delay & args(last 2 optional)
//setTimeout(fn, delay, arg1, arg2)
// Have our file print out these three words 4311o th3r3 w0r1d three seconds after the file is run.all words can print at same time
const printMsg = (msg) => {  
      console.log(msg);   
  }
  setTimeout(printMsg, 1000, "together 4311o, th3r3, w0r1d");

  console.log('Print One by One after a delay');
  setTimeout(printMsg, 2000, "First")
  setTimeout(printMsg, 3000, "Second")
  setTimeout(printMsg, 4000, "Third")
