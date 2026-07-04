const display=document.getElementById("display")

const buttons=document.querySelectorAll(".btn")

buttons.forEach(button => {
    button.addEventListener("click", function () {
      let value=this.textContent;
      if(value=='x'){
        value='*';
      }
        appendToDisplay(value);
    });
});

const button=document.getElementById("calculate")
button.addEventListener("click",calculate)


const clearButton=document.getElementById("clear")
clearButton.addEventListener("click",clearDisplay)

function calculate(){
  try {
      display.value = eval(display.value);
  } catch {
      display.value = "Error";
  }

}
function appendToDisplay(input){
  display.value+=input;
}
function clearDisplay(){
  display.value="";
}

