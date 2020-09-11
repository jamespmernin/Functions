// Question 1: Print "Hello world!" to the console
function sayHello() {
  console.log("Question 1:\nHello world!");
}

// Question 2: Print another phrase to the console
function saySomething() {
  console.log("\nQuestion 2:\nYou picking up on what I'm throwing down?");
}

// Question 3: Print the numbers 1-100 to the console
function print100() {
  let nums = [];
  console.log('\nQuestion 3:');
  for (let i = 1; i <= 100; i++) {
    nums[i - 1] = i;
  }
  console.log(nums);
}

// Question 4: Given an array of numbers, calculate and return the sum of all the numbers
function arraySum(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

// Question 5: Given an array of students, loop through and print what class each student is in
function roleCall() {
  console.log('\nQuestion 5:');
  const students = [
    'Alice',
    'Andrew',
    'Casey',
    'Damian',
    'Grant',
    'Howie',
    'Kat',
    'Kimbrad',
    'Kiu',
    'Natasha',
    'Obi',
    'Pedro',
    'Sarah',
    'Scott',
    'Tiffany',
    'Wade',
    'Zhe',
  ];
  for (let i = 0; i < students.length; i++) {
    console.log(`${students[i]} is in SEI Pheonix`);
  }
}

// Question 6: Given an array of words, create an array of their lengths and return that array
function wordLengths(words) {
  let lengths = [];
  for (let i = 0; i < words.length; i++) {
    lengths.push(words[i].length);
  }
  return lengths;
}

// Question 7: Given three numbers, return the product of the first two raised to the power of the third
function funkyMath(x, y, z) {
  return Math.pow(x * y, z);
}

// Bonus 1: Print only the EVEN numbers between 1 and 100
function print100evens() {
  let nums = [];
  let numsIndex = 0;
  console.log('\nBonus 1:');
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      nums[numsIndex] = i;
      numsIndex++;
    }
  }
  console.log(nums);
}

// Bonus 2: Print the first twenty numbers in the Fibonacci sequence
function fib20() {
  let fib = [0, 1];
  for (let i = 2; i < 20; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
}

// call functions
sayHello();
saySomething();
print100();
console.log(`\nQuestion 4:\n${arraySum([1, 2, 3, 4, 5])}`);
roleCall();
console.log(`\nQuestion 6:\n${wordLengths(['lion', 'tiger', 'chimera'])}`);
console.log(`\nQuestion 7:\n${funkyMath(2, 3, 2)}`);
print100evens();
console.log(`\nBonus 2:\n${fib20()}`);