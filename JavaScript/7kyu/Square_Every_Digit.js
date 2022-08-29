// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
  
    return Number( 
                  num.toString() // num === "462"
  
                  .split('') // ["4", "6", "2"]
  
                  .map(elem => elem * elem) //"4" * "4" === 16  
                  
                  // Now we have [16, 36, 4]
  
                  .join('') // "16364"
                  );
  }