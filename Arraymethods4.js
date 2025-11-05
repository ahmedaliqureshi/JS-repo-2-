// fileter method
/*the filter method creates a new array filled with elemets that pass a test (a condition you defin in a funciton)*/

// let arr= [1,2,3,4,5,6,7,8,9,10];

// let a=arr.filter( arr>5);

// console.log(a);

// let arr2= [20, 30, 40, 50 , 60, 70, 8000, 1]; 

// let a= arr2.filter((x)=>x>30);
// console.log(a);


// aray can also store the objects 

// let deltaforce = 
// [
//     {
//         name:'josh', 
//         age:38,
//         isAlive:false, 
//         isSleeping:null
//     },

//     {
//         name:'mike',
//         age:41, 
//         isALive:true,
//         isSleeping:null
//     },

//     {
//         name:'jhon', 
//         age: 50,
//         isAlive:false,
//         isSleeping:null
//     }
// ]; 

// let output= deltaforce.filter((x)=> x.age<40);

// console.log(output);



// slice method 
// it is used to copy or extract a portion of an array or string without changing the original one

// let arr= [10 , 20 , 30 , 40 , 2]; 

// let output= arr.slice(1,3); //(index, length)

// console.log(output);


// some method
// it checks if at least one element in an array passes a condition 

// it returns  

// true if all any one element passes the condition 
// false if non passes the condition 

// let's declare an array variable 

let arr1= [10, 20, 30, 40, 50,60 ]; 

// then we will give condition and check 

let result= arr1.some((x)=> x % 2==0); //true 

console.log(result);

