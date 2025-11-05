// rerecurrsion:- when a funciton call itself to solve a smaller versionj of the smame problem until it reaches a base case. 

//1st we are going to declare the funciton with the name of hello 

// function hello()
// {
//     //2nd we are going to print the sentence
//     console.log('this is a recurisve funtion');
//     // 3rd calling the function with in the function
//     hello();
// }
// // 4th callinhg the function out of the funciton
// hello (); 
// it will execute till the whole ram is occupies 

// the recursive function can also be controlled with an codition 

// 1st make the funtion and give it a name, with a parameter
// paramter is used to put the condition  
// function count(numb) 
// {
//     //2nd make the printing the operation, then put the vlaue of the numb
//     console.log('the count is=',numb);

//     //3rd put the condition with the if condition, where if the number meets actions happens

//     if(numb==5)
//     {
//         // stop the loop
//        return console.log('stoped the recurssion loop');
//     }
//   console.log('calling funciton');
//   // calling the function for n number of times 
//   count(numb-1);
// }
// count(10);


// we are going to declare the recurssion 

//1st, make the funciton and give it a name and parameter
// the parameter is a  
//  function factorial(a)
//  {
//      //2nd, we are going to decalre the if condition, where the a=0 then it will return the 1
     
//      if(a==0)return 1; 
//      return a* fucntorial(a-1);
//  }
//  let output=factorial(0); 
//  console.log(output);