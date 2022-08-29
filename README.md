
<a href="https://www.codewars.com/users/Bezziboi">
<img src=https://www.codewars.com/users/Bezziboi/badges/large> 
</a>




<details>
<summary><h2><samp>SQL</samp></h2></summary>

<h1 align="center">6kyu</h1>

<h3>SQL Bug Fixing: Fix the QUERY - Totaling</h3>

Oh no! Timmys been moved into the database divison of his software company but as we know Timmy loves making mistakes. Help Timmy keep his job by fixing his query...

Timmy works for a statistical analysis company and has been given a task of totaling the number of sales on a given day grouped by each department name and then each day.

Resultant table:

day (type: date) {group by} [order by asc]

department (type: text) {group by} [In a real world situation it is bad practice to name a column after a table]

sale_count (type: int)

Tables and relationship below:

![kBkwsbi](https://user-images.githubusercontent.com/106346771/185648104-c3500edf-0ae7-4369-9eed-414b0c90e623.png)
```sql
SELECT 
  DATE(s.transaction_date) AS day, 
  d.name AS department, 
  COUNT(s.id) AS sale_count
FROM department d
  INNER JOIN sale s
  ON d.id = s.department_id
GROUP BY day, d.name
ORDER BY day ASC;
```

<h3>SQL Basics: Simple NULL handling</h3>

For this challenge you need to create a SELECT statement, this select statement must have NULL handling, using COALESCE and NULLIF.

If no ```name``` is specified you must replace with ```[product name not found]```

If no ```card_name``` is specified you must replace with ```[card name not found]```

If no ```price``` is specified you must throw away the record, you must also filter the dataset by prices greater than 50.

** eusales table schema **
- id
- name
- price
- card_name
- card_number
- transaction_date

** resultant table schema **
- id
- name
- price (greater than 50.00)
- card_name
- card_number
- transaction_date

NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.

```sql
SELECT
  id,
  COALESCE( NULLIF(name,''), '[product name not found]') AS name,
  price,
  COALESCE( NULLIF(card_name,''), '[card name not found]') AS card_name,
  card_number,
  transaction_date
FROM eusales
WHERE price > 50.00
```

<h3>SQL Basics: Simple EXISTS</h3>

For this challenge you need to create a SELECT statement that will contain data about ```departments``` that had a sale with a price over 98.00 dollars. This SELECT statement will have to use an ```EXISTS``` to achieve the task.

** departments table schema **
- id
- name

** sales table schema **
- id
- department_id (department foreign key)
- name
- price
- card_name
- card_number
- transaction_date
- resultant table schema
- id
- name

NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing. Do not: alias tables as this can cause a failure.

```sql
SELECT id, name FROM departments d
  WHERE EXISTS 
  (SELECT name FROM sales s 
  WHERE s.department_id = d.id AND s.price > 98.00);
```

<h1 align="center">7kyu</h1>

<h3>Best-Selling Books (SQL for Beginners #5)</h3>

You work at a book store. It's the end of the month, and you need to find out the 5 bestselling books at your store. Use a select statement to list names, authors, and number of copies sold of the 5 books which were sold most.

** books table schema **

- name
- author
- copies_sold

NOTE: Your solution should use pure SQL. Ruby is used within the test cases just to validate your answer.
```SQL
SELECT * FROM books ORDER BY copies_sold DESC LIMIT 5;
```


<h3>SQL: Concatenating Columns</h3>

Given the table below:

** ```names``` table schema **

- id
- prefix
- first
- last
- suffix

Your task is to use a select statement to return a single column table containing the full title of the person (concatenate all columns together except id), as follows:

** output table schema **

- title

Don't forget to add spaces.
```sql
SELECT 
  CONCAT(prefix, ' ', first, ' ', last, ' ', suffix) AS title 
FROM names;
```


<h3>SQL: Right and Left</h3>

You are given a table named ```repositories```, format as below:

** repositories table schema **

- project
- commits
- contributors
- address
	
The table shows project names of major cryptocurrencies, their numbers of commits and contributors and also a random donation address ( not linked in any way :) ).

For each row: Return first x characters of the project name where x = commits. Return last y characters of each address where y = contributors.

Return project and address columns only, as follows:

** output table schema **

- project
- address
	
Case should be maintained.

```sql
SELECT 
  LEFT(project, commits) as project, 
  RIGHT(address, contributors) as address 
FROM repositories;
```

	
<h3>SQL with Street Fighter: Total Wins</h3>

It's time to assess which of the world's greatest fighters are through to the 6 coveted places in the semi-finals of the Street Fighter World Fighting Championship. Every fight of the year has been recorded and each fighter's wins and losses need to be added up.

Each row of the table ```fighters``` records, alongside the fighter's name, whether they won (1) or lost (0), as well as the type of move that ended the bout.

- id
- name
- won
- lost
- move_id
- winning_moves

- id
- move

However, due to new health and safety regulations, all ki blasts have been outlawed as a potential fire hazard. Any bout that ended with ```Hadoken, Shouoken``` or ```Kikoken``` should not be counted in the total wins and losses.

So, your job:

Return ```name, won,``` and ```lost``` columns displaying the name, total number of wins and total number of losses. Group by the fighter's name.
Do not count any wins or losses where the winning move was ```Hadoken, Shouoken``` or ```Kikoken```.
Order from most-wins to least
Return the top 6. Don't worry about ties.

```sql
SELECT 
  name,
  sum(won) AS won,
  sum(lost) AS lost
FROM fighters
INNER JOIN winning_moves on fighters.move_id = winning_moves.id
WHERE winning_moves.move NOT IN ('Hadoken','Shouoken','Kikoken')
GROUP BY 
  name
ORDER BY
  won DESC
LIMIT 6
```

<h1 align="center">8kyu</h1>

<h3>Grasshopper - Terminal game move function</h3>

Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

In SQL, you will be given a table ```moves``` with columns ```position``` and ```roll```. Return a table which uses the current position of the hero and the roll (1-6) and returns the new position in a column ```res```.

Example:
```
move(3, 6) should equal 15
```
Solution:
```sql
SELECT 
  position + (roll * 2) as res
FROM moves;
```

<h3>Returning Strings</h3>
	
Write a select statement that takes ```name``` from ```person``` table and return ```"Hello, <name> how are you doing today?"``` results in a column named ```greeting```

[Make sure you type the exact thing I wrote or the program may not execute properly]

```sql
SELECT 'Hello, ' || name || ' how are you doing today?'
  AS greeting
  FROM person;	
```
<h3>Collect Tuition (SQL for Beginners #4)</h3>

You are working for a local school, and you are responsible for collecting tuition from students. You have a list of all students, some of them have already paid tution and some haven't. Write a select statement to get a list of all students who haven't paid their tuition yet. The list should include all the data available about these students.

** students table schema **

- name (string)
- age (integer)
- semester (integer)
- mentor (string)
- tuition_received (Boolean)
NOTE: Your solution should use pure SQL. Ruby is used within the test cases just to validate your answer.
```sql
SELECT * FROM students WHERE tuition_received = false;
```

</details>











<details>
<summary><h2><samp>JavaScript</samp></h2></summary>
	
<h1 align="center">4kyu</h1>	
	
<h3>Remove Zeros</h3>

Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

For example, the following array

```[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]```

is transformed into

```[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]```

Zero elements are defined by either ```0``` or ```"0"```. Some tests may include elements that are not number literals.

You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any ```Array.prototype``` or ```Object.prototype``` methods.
	
```js
//muSolution
function removeZeros(array){
  let other = [], 
      zeros = [];
  
  for(const i of array){
    if(i === 0 || i === "0"){
      zeros[zeros.length] = i
    }
    else{
      other[other.length] = i  
    }
  }
  return [...other, ...zeros];
}
```

	
<h1 align="center">5kyu</h1>

<h3>First non-repeating character</h3>

Write a function named ```first_non_repeating_letter``` that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input ```'stress'```, the function should return ```'t'```, since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input ```'sTreSS'``` should return ```'T'```.

If a string contains all repeating characters, it should return an empty string (```''```) or ```None``` -- see sample tests.

```js
//mySolution
function firstNonRepeatingLetter(s){
  let str = s
  s = s.toLowerCase();
  
   for(let i = 0; i < s.length; i++){
       if (s.indexOf(s[i]) == s.lastIndexOf(s[i])){
         return str[i]
       }
     }
    return ''
}
```


<h3>Josephus Survivor</h3>

In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

```
josephus_survivor(7,3) => means 7 people in a circle;
one every 3 is eliminated until one remains
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out
[1,2,4,5,7] => 6 is counted out
[1,4,5,7] => 2 is counted out
[1,4,5] => 7 is counted out
[1,4] => 5 is counted out
[4] => 1 counted out, 4 is the last element - the survivor!
```
The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.

Notes and tips: using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be >=1.

```js
//mySolution
function josephusSurvivor(n,k){
  
  let arr = Array.from({length: n +1}, (x, i) => i);
      arr.shift()
  
  let deathOrder = [];

  while (arr.length !== 1){
    for (let i = 1; i < k; i++){ 
    arr.push(arr.shift());
    }
    deathOrder.push(arr.shift());  
  }
  return arr[0];
}
```

<h3>Number of trailing zeros of N!</h3>

Write a program that will calculate the number of trailing zeros in a factorial of a given number.

```N! = 1 * 2 * 3 *  ... * N```

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples

```js
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
```

Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.

```js
//mySolution
function zeros(n){
 
  if(n < 0) return -1;
     
    let count = 0;
 
    for (let i = 5; Math.floor(n / i) >= 1; i *= 5)
        count += Math.floor(n / i);
 
    return count;
}
```

<h3>String incrementer</h3>

Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

``` foo -> foo1 ```

``` foobar23 -> foobar24 ```

``` foo0042 -> foo0043 ```

``` foo9 -> foo10 ```

``` foo099 -> foo100 ```

Attention: If the number has leading zeros the amount of digits should be considered.


```js
//mySolution
function incrementString(strng){  

  // Extract string's number
  let num = strng.match(/\d+/) === null ? 0 : strng.match(/\d+/)[0];
  
  // Store number's length
  let numLength = num.length
  
  // Increment number by 1
  num = (parseInt(num) + 1).toString();
  
  // If there were leading 0s, add them again
  while (num.length < numLength) {
    num = "0" + num;
  }
    
  return strng.replace(/[0-9]/g, '').concat(num);
}
```

<h3>A Chain adding function</h3>

We want to create a function that will add numbers together when called in succession.

```js
add(1)(2); // == 3
```

We also want to be able to continue to add numbers to our chain.

```js
add(1)(2)(3); // == 6
add(1)(2)(3)(4); //  == 10
add(1)(2)(3)(4)(5); // == 15
```

and so on.

A single call should be equal to the number passed in.

```js
add(1); // == 1
```

We should be able to store the returned values and reuse them.

```js
var addTwo = add(2);
addTwo; // == 2
addTwo + 5; // == 7
addTwo(3); // == 5
addTwo(3)(5); // == 10
```

We can assume any number being passed in will be valid whole number.

```js
//mySolution
function add(n){
  let fn = (x) => {
    return add(n + x);
  }
  
  fn.valueOf = () => {
    return n;
  }
  
  return fn;
}

function add(n) {
  let next = add.bind(n += this | 0);
  next.valueOf = () => { return n }
  return next;
}

function add(n){
  let fn = (x) => { return add(n+x) }
  fn.toString = () => { return n }
  return fn;
}

function add(n){
  function mon(m) { return add(n+m) }
  mon.valueOf = function valueOf() { return n }
  return mon;
}

function add(n) {
  var f = (x) => { return add(n+x) }
  f.valueOf = () => { return n }
  return f;
}
```

<h3>Calculating with Functions</h3>

 This time we want to write calculations using functions and get the results. Let's have a look at some examples:

```js
 seven(times(five())); // must return 35
 four(plus(nine())); // must return 13
 eight(minus(three())); // must return 5
 six(dividedBy(two())); // must return 3
 ```
 
 Requirements:

 There must be a function for each number from 0 ("zero") to 9 ("nine")
 
 There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
 
 Each calculation consist of exactly one operation and two numbers
 
 The most outer function represents the left operand, the most inner function represents the right operand
 
 Division should be integer division. For example, this should return 2, not 2.666666...:
 
 eight(dividedBy(three()));

```js
//mySolutinon
function exp(number, operation) {
	if(!operation) return number;
	return operation(number);
}

function zero(operation) {return exp(0, operation)}
function one(operation) {return exp(1, operation)}
function two(operation) {return exp(2, operation)}
function three(operation) {return exp(3, operation)}
function four(operation) {return exp(4, operation)}
function five(operation) {return exp(5, operation)}
function six(operation) {return exp(6, operation)}
function seven(operation) {return exp(7, operation)}
function eight(operation) {return exp(8, operation)}
function nine(operation) {return exp(9, operation)}

function plus(a) {
	return function(b) {return b+a}
}
function minus(a) {
	return function(b) {return b-a}
}
function times(x) {
	return function(y) {return y*x}
}
function dividedBy(a) {
	return function(b) {return Math.floor(b/a)}
}
```

<h3>Simple Pig Latin</h3>

 Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

 
 ```js
 //Examples
 pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 pigIt('Hello world !');     // elloHay orldway !
```

```js
//mySolutinon
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
```

<h3>Moving Zeros To The End</h3>

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

```js
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] 
```

```js
//mySolution
function moveZeros(arr){
  
    let zeros = arr.filter(zero => zero===0),
        other = arr.filter(other => other!==0),
        filtered = [];
    
    filtered.push(...other, ...zeros);
  
    return filtered;
}
```

<h1 align="center">6kyu</h1>

<h3>Persistent Bugger</h3>

Write a function, ```persistence```, that takes in a positive parameter ```num``` and returns its multiplicative persistence, which is the number of times you must multiply the digits in ```num``` until you reach a single digit.

For example (Input --> Output):
```
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
```

```js
//mySolution
const persistence = num => {
   let count = 0;
  
   while (num.toString().length !== 1) {
     num = num.toString().split('').reduce( (a,b) => a * b);
     count++;
   }
  
   return count;
}
```

<h3>Unique In Order</h3>

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:
```js
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
```

```js
//mySolution
const uniqueInOrder = (iterable) => {
  
  let arr = Array.isArray(iterable) ? iterable : iterable.split('');
      
  return arr.filter((letter, i) => { return arr[i] !== arr[i + 1]; });
}
```

<h3>Counting Duplicates</h3>

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example

"abcde" -> 0 ```# no characters repeats more than once```

"aabbcde" -> 2 ```# 'a' and 'b'```

"aabBcde" -> 2 ```# 'a' occurs twice and 'b' twice (`b` and `B`)```

"indivisibility" -> 1 ```# 'i' occurs six times```

"Indivisibilities" -> 2 ```# 'i' occurs seven times and 's' occurs twice```

"aA11" -> 2 ```# 'a' and '1'```

"ABBA" -> 2 ```# 'A' and 'B' each occur twice```

```js
//mySolution
function duplicateCount(text){
  
  let counts = {};
  text = text.toLowerCase().split('');
  text.forEach((x) => { counts[x] = (counts[x] || 0) + 1; });
  counts = Object.values(counts)
  
  let count = 0;
  for (let i = 0; i < counts.length; i++){
    if(counts[i] > 1){
      count++
    }
  }
  return count
}
```
<h3>Array.diff</h3>

 Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

 ```js
 arrayDiff([1,2],[1]) == [2] 
 ```
 
If a value is present in b, all of its occurrences must be removed from the other:

```js 
arrayDiff([1,2,2,2,3],[2]) == [1,3] 
```

```js
//mySolution
function arrayDiff(a, b) {
    return a.filter(x => !b.includes(x))
}
```

<h3>Convert string to camel case</h3>

 Complete the method/function so that it converts dash/underscore delimited words into camel casing. 

 The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, 

 also often referred to as Pascal case).

```js
 //Examples
 "the-stealth-warrior" gets converted to "theStealthWarrior"
 "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
```

```js
//mySolution
function toCamelCase(str){
    str = str.split(/[_-\s]+/);
    
    for(let i = 1; i < str.length; i++){
      str[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1);
  }
      return str.join() .replace(/,/g, "");
}
```

<h3>Find The Parity Outlier</h3>

 You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
 
 The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
 
 Write a method that takes the array as an argument and returns this "outlier" N.

```js
 //Examples
 [2, 4, 0, 100, 4, 11, 2602, 36]
 Should return: 11 (the only odd number)

 [160, 3, 1719, 19, 11, 13, -21]
 Should return: 160 (the only even number)
```

```js
//mySolution
function findOutlier(integers){

    if(integers[0] % 2 === 0 && integers[1] % 2 === 0){
      return integers.find(int => int % 2 !== 0);
    }else if(integers[0] % 2 !== 0 && integers[1] % 2 !== 0){
      return integers.find(int => int % 2 === 0)
    }
    
    if(integers[2] % 2 === 0){
      return integers.find(int => int % 2 !== 0);
    }else{
      return integers.find(int => int % 2 === 0);
    }
}
```

<h3>Mexican Wave</h3>

 Task
 In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
 
 Rules
  1.  The input string will always be lower case but maybe empty.

  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
  
```js
 //Example
 wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
```

```js
//mySolution
function wave(str){
  let arr = [];
  
  for(let i = 0; i < str.length; i++){
    let string = str.split('');

    if(string[i] !== ' '){
      string[i] = string[i].toUpperCase()
      arr.push(string.join(''));
    }
  }
  return arr;
}
```

<h3>Multiples of 3 or 5</h3>

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

```js
//mySolution
function solution(number){
  
    let s = 0;
    
    for(let i = 0; i < number; i++){
      
      if(i % 3 === 0 || i % 5 === 0){
        s += i;
      }
    }
    return s;
}
```

<h3>Sort the odd</h3>

You will be given an array of numbers. You have to sort the odd numbers in ascending order 
while leaving the even numbers at their original positions.

```js
 //Examples
 [7, 1]  =>  [1, 7]
 [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
 [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
```

```js
//mySolution
function sortArray(array) {
  
    const odds = array.filter(x => x % 2).sort((a, b) => a - b);
          
    return array.map(x => x % 2 ? odds.shift() : x);
 }
 ```
 
 <h3>Split Strings</h3>
 
 Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

```js
 //Examples:
 * 'abc' =>  ['ab', 'c_']
 * 'abcdef' => ['ab', 'cd', 'ef']
```

```js
//mySolution
function solution(str) {
    let arr = str.match(/.{1,2}/g);
  
   if (str.length == 0) {
       return [];
    }
    else if(str.length % 2 == 1) {
        let x = str + "_";
        return arr = x.match(/.{1,2}/g);
    } 
    else return arr;
}
```

<h1 align="center">7kyu</h1>

<h3>Disemvowel Trolls</h3>

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata ```y``` isn't considered a vowel.

```js
//mySolution
const disemvowel = str => str.replace(/[aeiou]/gi, '');
```



<h3>Credit Card Mask</h3>

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function ```maskify```, which changes all but the last four characters into ```'#'```.

Examples
```
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"
```
```js
//mySolution
function maskify(cc) {
   let lgth = cc.length - 4,
       arr = Array.from({length: lgth}, () => '#');
  
  cc = cc.split('')
  cc.splice(0, lgth)
  arr = [...arr, cc]
  
  return arr.join('').replace(/,/g, '')
}
```


<h3>Don't give me five!</h3>
 
  In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

 ```js
 //Examples:
 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
 ```
 
 The result may contain fives. ;-)
 The start number will always be smaller than the end number. Both numbers can be also negative!


```js
//mySolution
function dontGiveMeFive(start, end) {

    let count = 0
  
    for (let i = start; i <= end; i++) {
  
      if (!i.toString().includes("5"))
        count++
    }
    return count
}
```

 <h3>Exes_and_Ohs</h3>
 
 Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

```js
 //Examples input/output:
 XO("ooxx") => true
 XO("xooxx") => false
 XO("ooxXm") => true
 XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
 XO("zzoo") => false
```

```js
//mySolution
function XO(str) {
    let x = 0, 
        o = 0;

    for (let i in str) { 
        if (str[i].toLowerCase() === "x") {
            x++;
        } else if (str[i].toLowerCase() === "o") {
            o++;
        }
 }
    return x === o;
}
```
 
  <h3>Friend_or_Foe</h3>
  
 Make a program that filters a list of strings and returns a list with only your friends name in it.

 If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

 ``` Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"] ```

 i.e.

 ``` friend ["Ryan", "Kieran", "Mark"] "shouldBe" ["Ryan", "Mark"] ```

 Note: keep the original order of the names in the output.

```js
//mySolution
function friend(friends){
    return friends.filter(el => el.length === 4);
}
```

<h3>Help_Suzuki_rake_his_garden!</h3>

 You will be given a string representing the garden such as:

```js
garden = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel'
```

 Rake out any items that are not a rock or gravel and replace them with gravel such that:

```js
 garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
```
 
 Returns a string with all items except a rock or gravel replaced with gravel:

```js
 garden = 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'
 ```

```js
//mySolution
function rakeGarden(garden){

  return garden.split(' ')
                .map(value => value == 'rock' ? 'rock' : 'gravel')
                .join(' ');     
}
```

<h3>Square_Every_Digit</h3>

 Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

 For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

 Note: The function accepts an integer and returns an integer

```js
//mySolution
function squareDigits(num){
  
    return Number( 
                  num.toString() // num === "462"
  
                  .split('') // ["4", "6", "2"]
  
                  .map(elem => el * el) //"4" * "4" === 16  
                  
                  // Now we have [16, 36, 4]
  
                  .join('') // "16364"
                  );
  }
  ```
  
<h3>String ends with</h3>
  
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

```js
 //Examples:
 solution('abc', 'bc') // returns true
 solution('abc', 'd') // returns false
```

```js
//mySolution
function solution(str, ending){
    return ending === str.substr(str.length - ending.length);
}
```

<h3>Suzuki needs help lining up his students!</h3>

Suzuki needs help lining up his students!

 Today Suzuki will be interviewing his students to ensure they are progressing in their training. He decided to schedule the interviews based on the length of the students name in descending order. The students will line up and wait for their turn.

 You will be given a string of student names. Sort them and return a list of names in descending order.

 Here is an example input:

```js
 string = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'
``` 
 
 Here is an example return from your function:
 
```js
  lst = ['Takehiko',
         'Takayuki',
         'Takahiro',
         'Takeshi',
         'Takeshi',
         'Takashi',
         'Tadashi',
         'Takeo',
         'Takao']
```  

 Names of equal length will be returned in reverse alphabetical order (Z->A) such that:

```js
 string = "xxa xxb xxc xxd xa xb xc xd"
 Returns
 ['xxd', 'xxc', 'xxb', 'xxa', 'xd', 'xc', 'xb', 'xa']
```

```js
//mySolution
function lineupStudents(students){
    return students
      .trim()
      .split(/\s+/)
      .sort((a, b) => b.length - a.length || b.localeCompare(a));
  }
  ```
  
  <h3>Triangular_Treasure</h3>
  
Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

```js
 1st (1)   2nd (3)    3rd (6)
 *          **        ***
            *         **
                      *
 ```
 You need to return the nth triangular number. You should return 0 for out of range values:

 For example: (Input --> Output)
 
```js
 0 --> 0
 2 --> 3
 3 --> 6
 -10 --> 0
```

 Return the nth triangular number

```js
//mySolution
function triangular( n ) {
  
    if( n < 0) return 0;
      
      return ((n / 2) * (n + 1)) * (n / n) || 0;
}
```

<h3>You're_a_square!</h3>

 Task
 
 Given an integral number, determine if it's a square number:

 In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

 The tests will always use some integral number, so don't worry about that in dynamic typed languages.

```js
 //Examples
 -1  =>  false
  0  =>  true
  3  =>  false
  4  =>  true
 25  =>  true
 26  =>  false
```

```js
//mySolution
let isSquare = function(n){
    return n >= 0 && Math.sqrt(n) % 1 === 0;
}
```

<h1 align="center">8kyu</h1>

<h3>Even_or_Odd</h3>

Create a function that takes an integer as an argument and returns

"Even" for even numbers or "Odd" for odd numbers.

```js
//mySolution
function even_or_odd(num) {
    return num % 2 ? "Odd" : "Even"
}
```

<h3>isRealNaN</h3>

I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.

 Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

 Any solution is acceptable!

```js
//mySolution
function isReallyNaN(val){

    // return isNaN(val);  // wasn't working as planned :-(
    
    if(val == Number(val) || val == String(val) || val == undefined){
      return false;
    }
    else if(val === NaN){
      return false;
    }
    return true || false;
  };
  ```
</details>
