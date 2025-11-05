// set time can also be used to show the time intervals, this can be
// be useful when know what code is being excuted and how long it is 
// is taking 


//  1st we declaring the function, showtime

function showtime()
{
    // 2nd we decalring a variable, where we are going to store the 
    // date and time 

    let date = new Date();

    // 3rd we are going to take another variable, where we are going 
    // to conver the date and time to be converted for string 

    let time= dateTime.toLocaleTimeString(); 
    
    // 4ht, then we are printing it 

    console.log(time); 

    //5th, we are displaying it after 3 or 4 seconds 
     setTimeout(showtime, 4000)
}