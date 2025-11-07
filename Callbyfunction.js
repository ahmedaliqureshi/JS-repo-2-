// call back function
// it is a function passed as argument to another function, and is called later insided that function.

function greet(a,b)
{
    console.log('hello'+a); 
    b(); 
}
function afterGreeting ()
{
       
}
