// promises in JS
// it is an objext that represents the eventual completion or failure of an asynchronous operation
// eg:- it will fetch the data , if it works, it will resolve it
// or else it fails , it will reject it

// const promise = new Promise ((resolve, reject)=>
// {
//     let success = true;

//     if(success)
//     {
//         resolve('task completed');
//     }
//     else
//     {
//         reject('task failed');
//     }
// });

function timerCallback(callback,seconds)
{
    console.log(`waiting for ${seconds}`);
    setTimeout(()=>
    {
        callback(`done after ${seconds} seconds`);
    }, seconds * 1000);
}

timerCallback(
    (msg)=>{
        console.log(msg);
    },2
);

function timerPromise(seconds) {
  return new Promise((resolve, reject) => {
    if (seconds < 0) {
      reject("invalid time");
    } else {
      setTimeout(() => {
        resolve(`done after ${seconds} seconds`);
      });
    }
  });
}
timerPromise(2)
.then((msg)=> console.log(msg));
.catch((err)=>console.lgo(err));


v3 => Promise Chaining

function timerPromise(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(✅ Timer finished for ${seconds} seconds);
    }, seconds * 1000);
  });
}

timerPromise(1)
  .then((msg) => {
    console.log(msg);
    return timerPromise(2);
  })
  .then((msg) => {
    console.log(msg);
    return timerPromise(3);
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => console.log(err))
  .finally(() => console.log("⏱ All timers done!"));

// promise.all() 
Promise.all([timerPromise(1),timerPromise(2),timerPromise(3)])
.then((results)=>console.log('all done:',results))
.catch((err)=>console.log(err));


// promise.race()
Promise.race([timerPromise(1),timerPromise(2),timerPromise(3)])
.then((results)=>console.log('first finished:',results))
.catch((err)=>console.log(err));

async function finalRunner()
{
    try{
        let timer1=await timerPromise(3); 
        console.log(timer1); 

        let timer2= await timerPromise(2); 
        console.log(timer2); 

        let timer3= await timerPromise(1); 
        console.log(timer3); 
    }catch (error)
    {
        console.log(error); 
    }
}

finalRunner()