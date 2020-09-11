// Question 1
function sayHello() {
  console.log("Question 1:\nHello world!");
}

// Question 2
function saySomething() {
  console.log("\nQuestion 2:\nYou picking up on what I'm throwing down?");
}

// Question 3
function print100() {
  let nums = [];
  console.log('\nQuestion 3:');
  for (let i = 1; i <= 100; i++) {
    nums[i - 1] = i;
  }
  console.log(nums);
}

// Question 4
function arraySum(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

// Question 5
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

// Question 6
function wordLengths(words) {
  let lengths = [];
  for (let i = 0; i < words.length; i++) {
    lengths[i] = words[i].length;
  }
  return lengths;
}

// Question 7
function funkyMath(num1, num2, num3) {
  return Math.pow(num1 * num2, num3);
}

// Bonus 1
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

// Bonus 2
function fib20() {
  let fib = [];
  fib[0] = 0;
  fib[1] = 1;
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