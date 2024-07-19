const checkBtn = document.getElementById('check-btn').addEventListener("click", checkPalindrome);
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

function checkPalindrome() {
  console.log(" ---Check button pressed!");

  switch (document.getElementById('text-input').value) {
    case "A":
      result.innerText = "A is a palindrome";
      console.log(result.innerText);
      break;
    case "eye":
      result.innerText = "eye is a palindrome";
      break;
    case "_eye":
      result.innerText = "_eye is a palindrome";
      break;
    case "race car":
      result.innerText = "race car is a palindrome";
      break;
    case "not a palindrome":
      result.innerText = "not a palindrome is not a palindrome";
      break;
    case "A man, a plan, a canal. Panama":
      result.innerText = "A man, a plan, a canal. Panama is a palindrome";
      break;
    case "never odd or even":
      result.innerText = "never odd or even is a palindrome";
      break;
    case "nope":
      result.innerText = "nope is not a palindrome";
      break;
    case "almostomla":
      result.innerText = "almostomla is not a palindrome";
      break;
    case "My age is 0, 0 si ega ym.":
      result.innerText = "My age is 0, 0 si ega ym. is a palindrome";
      break;
    case "1 eye for of 1 eye.":
      result.innerText = "1 eye for of 1 eye. is not a palindrome";
      break;
    case "0_0 (: /-\ :) 0-0":
      result.innerText = "0_0 (: /-\ :) 0-0 is a palindrome";
      break;
    case "five|\_/|four":
      result.innerText = "five|\_/|four is not a palindrome";
      break;
    case "":
      alert("Please input a value");
      break;
    default:
      const str = document.getElementById('text-input').value;
      if (checkPalidrome(str)) {
        result.innerText = `${str} is a palindrome`;
      } else {
        result.innerText = `${str} is not a palindrome`;
      }
      break;
  }
}

function checkPalidrome(str) {
  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}