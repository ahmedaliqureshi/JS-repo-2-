// try catch and finally
// it is a way to handle errors in JS so you're program does not crash 
// syntax
/*
  try
  {
    code 
    catch(error)
    {
         code 
    }
  }
    finally 
     {
        code run
      }
*/

// try{
//     let output= 10/0; 
//     console.log(output);
// }
// catch(error)
// {
//     console.log('error'); 
//     console.log(error,name, error.message); 
// }
// finally
// {
//     console.log('i am coming'); 
// }

// throw is used to manually create an error in your code 
// basically means something goes wrong, stop everything and jump to the catch block

try
{
    let age= 15; 
    if(age<18)
    {
        throw 'you must be 18 older';
    }
    console.log('welcome');
    else 
        {
            
        } 
} 
catch(error)
{
    console.log('e')
}

