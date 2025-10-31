// const numbers= array.from({length: 1000}, (_,i)=> i+1); 
// console.log(numbers);

// we will make an loop, with an variable i 
// the i will be initated (starting vlaue) will be 1
// then i value should be less then or equal to 3 
// if condition satifies then enter the loop 

// then when conditon satisfy the condition, then enter the secon loop 
// the j value is initated to 1 as well 
// then j value is also less then 3 
// if condition satifies then enter the loop 



for (let i = 1;i<=3;i++) 
     {
        console.log('outer loop',i);
        let row= ''; 
        for(let j = 1;j<=i;j++)
        {
            row +='*';
            console.log(' inner loop',j);
        }
     }
     console.log(row, 'answer');