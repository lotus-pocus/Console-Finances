//an array of variable selections


//the total number of months in the dataset

var totalMonths = [finances.length];
console.log('total months: ' + totalMonths);

//net total amount of Profit/Losses over the entire period.
var myArr = (finances.flat());

var sum = myArr.reduce( (sumSoFar, nextValue) => {
    if ( typeof nextValue === "number" && isFinite(nextValue) ) {
       return sumSoFar + nextValue;
    }
    
    return sumSoFar;
 }, 0); 
  
  console.log('Total: $' + sum);


//The average of the **changes** in Profit/Losses over the entire period.

// console.log (sum/finances.length);


//The greatest increase in profits (date and amount) over the entire period.

var largest= 0;

for (i=0; i<myArr.length; i++){
    if (myArr[i]>largest) {
        largest=myArr[i];
    }
}




console.log(largest);

//The greatest decrease in losses (date and amount) over the entire period.


