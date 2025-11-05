+// parsefloat()
// they are build in JS funcitons that convert strings into numbers 
// convert to decimal number 
// string -> number 

console.log(parseFloat("43.5"));
console.log(parseFloat("cm 22"));
console.log(parseFloat("a12b"));
console.log(parseFloat("22 cm"));


// pareint... converts to number 
// we use parseInt for number systems, it converts binary to decimal 
// when we are converting the binary to decimal, the binary number is written 1st then the base number
console.log(parseInt("1111",2));
console.log(parseInt("1010",2));
console.log(parseInt("1000",2));
console.log(parseInt("1100100",2));
// it also round off the number as well, like it removes the numbers after the decimal 
console.log(parseInt("45.234"));


//toFixed... round off number







//toLocalstring()
// is a number methods that formats a number according to specific locale (country/language) or style like adding 
// commas, currency, or precnetage

// suntac=> number.toLocaleString([local],[options])

// locale > optional string like 'en-US','hi- IN' etc
//(defines language and region format)

//optinal= optional object to control formatiing style (currenctm, decimal, etc)


let num= 123457.852; 
console.log(num.toLocaleString('en-US'));
console.log(num.toLocaleString('de-DE'));
console.log(num.toLocaleString('hi-IN'));
console.log(num.toLocaleString('en-US', {style:'currency', currency:"USD"}));
console.log(num.toLocaleString('hi-IN', {style:'currency', currency:"IND"}));
console.log(num.toLocaleString('ja-Jp', {style:'currency', currency:"JPY"}));
console.log(num.toLocaleString('en-US', {style:'currency', currency:"USD"}));







