// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  let arr = str.split(" "),
      pig = [];
  
   for(let word of arr){
      if((/([a-zA-Z])/).test(word)){
       pig.push(word.substring(1) + word[0] + "ay");
      }else{
       pig.push(word);
      }
   }
   return pig.join(" ");
}