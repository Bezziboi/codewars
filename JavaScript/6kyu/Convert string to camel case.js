// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, 
// also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    str = str.split(/[_-\s]+/);
    
    for(let i = 1; i < str.length; i++){
      str[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1);
  }
      return str.join() .replace(/,/g, "");
  }