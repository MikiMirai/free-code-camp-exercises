const checkButton = document.getElementById('check-btn').addEventListener("click", checkPhoneNumber);
const clearButton = document.getElementById('clear-btn').addEventListener("click", clearInput);
const numberInput = document.getElementById('user-input');
const result = document.getElementById('results-div');

function clearInput(){
  result.innerText = "";
}

function checkPhoneNumber(){
  const checkNum = document.getElementById('user-input').value;

  if (checkNum === ""){
    console.log(checkNum);
    alert("Please provide a phone number");
    return;
  }

  if(checkNum.length < 10){
    result.innerText = 'Invalid US number: ' + checkNum;
    result.classList.remove("hidden");
    return;
  }

  if(isValidPhoneNumber(checkNum)){
    console.log(checkNum);
    result.innerText = 'Valid US number: ' + checkNum;
    result.classList.remove("hidden");
  } else{
    result.innerText = 'Invalid US number: ' + checkNum;
    result.classList.remove("hidden");
  }
}

function isValidPhoneNumber(phoneNumber) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return regex.test(phoneNumber);
}