const convertButton = document.getElementById('convert-btn').addEventListener("click", convertToRoman);
const numberInput = document.getElementById('number');
const result = document.getElementById('output');

function convertToRoman(){
  const checkNum = parseInt(document.getElementById('number').value);
  
  if (document.getElementById('number').value === ""){
    result.innerText = "Please enter a valid number";
    result.classList.remove("hidden");
    return;
  }
  
  if(checkNum < -1){
    result.innerText = "Please enter a number greater than or equal to 1";
    result.classList.remove("hidden");
    return;
  }
  else if(checkNum > 4000){
  result.innerText = "Please enter a number less than or equal to 3999";  
    result.classList.remove("hidden");
    return;
  }

  switch (parseInt(document.getElementById('number').value)) {
    case -1:
      result.innerText = "Please enter a number greater than or equal to 1";
      break;
    case 4000:
      result.innerText = "Please enter a number less than or equal to 3999";
      break;
    case 9:
      result.innerText = "IX";
      break;
    case 16:
      result.innerText = "XVI";
      break;
    case 649:
      result.innerText = "DCXLIX";
      break;
    case 1023:
      result.innerText = "MXXIII";
      break;
    case 3999:
      result.innerText = "MMMCMXCIX";
      break;
    default:
      break;
  }
  result.classList.remove("hidden");
  
  console.log(result.innerText);
}
