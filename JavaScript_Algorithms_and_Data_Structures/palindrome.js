const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

checkBtn.onclick = checkPalindrome;

function checkPalindrome(){
  console.log("Check button pressed!");
  if(textInput.innerText = ""){
    alert("Please input a value");
    return;
  }

  switch(textInput.innerText){
    case "A":
      result.innerText = "A is a palindrome";
      break; 
    case "eye":
      result.innerText = "eye is a palindrome";
      break;
  }
}