// I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.

// Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

// Any solution is acceptable!

const isReallyNaN = (val) => {
    // return isNaN(val);  // wasn't working as planned :-(
    if(val == Number(val) || val == String(val) || val == undefined){
      return false;
    }
    else if(val === NaN){
      return false;
    }
    return true || false;
  };