// for of loop 
// it prints the value of the array, it cnnot increment or perfome any operation

// array1=['mike','josh','jhon']; 
// for (let x of array1)
// {
//     console.log(x);
// }


// for in loop 
// used to loop through the properties or keys of an object or values 


let mydetails=
{
    fullname:"XYZ",
    age:20, 
    isAlive:true,
    isSleeping:null, 
    isAwake: undefined
}; 
for(let keys in mydetails)
{
    console.log (mydetails[keys]);
}