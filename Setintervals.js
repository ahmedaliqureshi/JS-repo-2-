// setIntervals
// mit repetedly calls a function or executees a code snippet, with  a
// fixed time delay between each call 
// continues running until you stop it using clearIntervals()

let count= 10 
const time= setInterval
(
    ()=>
        {console.log('hello, this is interval');
console.log('you are timing ticking');
console.log(count); 
count --; 

if (count==0)
  {
    console.log('stoppe'); 
    clearIntrerval(time);
   }
        },2000
); 