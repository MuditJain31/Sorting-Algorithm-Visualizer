
const buttons = document.querySelectorAll('div.sortingAlgos button');
console.log(buttons)
buttons.addEventListener("click",output);

function output(){
    let val = document.getElementById("arraySize").value;
    console.log(val);
}