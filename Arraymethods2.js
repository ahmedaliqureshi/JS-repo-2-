// 11) includes () methods

// let arr = [1,2,3]; 
// console.log(arr.includes(4)); 

// it checks if the element in the array exist or not, if exists it will give true or else false 

//12) join() method

// let arr2= [1,2.3,5,6,7]; 
// let arr3= [2]; 
// console.log(arr2.join('\t |'));


//13) reverse () method

// let arr = [1,2,3,4]; 
// console.log(arr.reverse());

// let arr8 = [1,2,3,4,5,6,7,8,9,10]; 
// console.log(arr8.reverse());

//14) sort() method 

// let arr2 = [10,9,8,7,6,5,4,3,2,1];
// console.log(arr2.sort()); 

//Imediate invoke function  expression 
// (() => { usually used only for one line
//          })

// let arr3= [22,33,44,55,66,88]
// console.log(arr3.sort((a,b)=>a-b));
// console.log(arr3.sort((a,b)=>b-a));

// 15) flat () method
// let arr3 = ['hello','hi',['bye','see you'], 'look for it'];
// console.log(arr3.flat());


//16) array.of () method 
// a method is  used to create a new array 
// it helps in creating the array withoug square brackets

let output = Array.of('hi','hello', 23,9292.2, 12,false); 
console.log(output)
