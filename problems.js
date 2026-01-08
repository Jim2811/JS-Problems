// Write a function that takes a string and returns it reversed.
const reverseString = (value) => {
  const valueSplit = value.split("");
  const reversedValue = valueSplit.reverse();
  const reversedStr = reversedValue.join("");
  return reversedStr;
};
// console.log(reverseString("hello"));

// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.
const vowelsCount = (value) => {
  let count = 0;
  const vowel = "aeiou";
  const valueStr = value.toLowerCase();
  for (const character of valueStr) {
    if (vowel.includes(character)) {
      count += 1;
    }
  }
  return count;
};
// console.log(vowelsCount("Hello"));

// Write a function that checks if a string is a palindrome (reads the same forward and backward).
function palindrome(value) {
  const inputStr = value.toLowerCase();
  const valueSplit = inputStr.split("");
  const reversedValue = valueSplit.reverse();
  const reversedStr = reversedValue.join("");
  if (reversedStr === inputStr) {
    console.log(true);
  } else {
    console.log(false);
  }
}
// palindrome("Madam");
// palindrome("Ama");
// palindrome("jim");

// Write a function that takes an array of numbers and returns the largest number.
function largestNum(arr) {
  const large = Math.max(...arr);
  return large;
}
// console.log(largestNum([1, 2, 3, 4, 5, 9]));

// Write a function that removes all duplicate numbers from an array
function removeDuplicate(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}
// console.log(removeDuplicate([1, 4, 4]));

// Write a function that returns the sum of all numbers in an array.
function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const arr = [1, 2, 3, 4];
// console.log(sumOfArray(arr));

// Write a function that returns all even numbers from a given array.
function evenNumb(arr) {
  const evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    }
  }
  return evenArr;
}
// console.log(evenNumb([1, 2, 3, 4, 5, 6]));

// Write a function that capitalizes the first letter of each word in a string.
function capitalizer(str) {
  const words = str.split(" ");
  const capitalized = [];
  words.map((word) => {
    capitalized.push(word.charAt(0).toUpperCase() + word.slice(1));
  });
  return capitalized.join(" ");
}
// console.log(capitalizer("hello world"));

// Write a function that calculates the factorial of a number using a loop.
function factorial(num) {
  let facto = 1;

  for (let i = 1; i <= num; i++) {
    facto = facto * i;
  }
  return facto;
}
// console.log(factorial(3));

// Write a function that prints numbers from 1 to 20.
function pingPong(num) {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("PingPong");
    } else if (i % 3 == 0) {
      console.log("Ping");
    } else if (i % 5 == 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}
// pingPong(20);
