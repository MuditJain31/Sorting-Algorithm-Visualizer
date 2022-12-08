import {bubbleSort} from "./BubbleSort.js";

export function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

function createArray(divs,length){
    console.log('inside create array');
    let cont = document.querySelector('div.showArea');
    let size = document.getElementById('arraySize').value;
    console.log(size);
    for(let i=0;i<size;i++){
        let temp = Math.floor((Math.random()*size) + 1);
        length.push(temp);
        let elem = document.createElement('div');
        elem.style.marginLeft=`${0.5}%`;
        elem.style.height=`${temp/size * 95}%`;
        elem.style.width=`${100/size - 0.5}%`;
        elem.style.backgroundColor='red';
        divs.push(elem);
        cont.appendChild(elem);
    }
    console.log(divs,length);
}

function executeAlgo(button,divs,lengths){
    switch(button.innerText){
        case "Bubble Sort":console.log("invoked successfully");
                            bubbleSort(divs,lengths);
        case "Bubble Sort":
        case "Bubble Sort":
        case "Bubble Sort":
        case "Bubble Sort":
        case "Bubble Sort":break;
    }
}

function main(){
    
    let divs=new Array();
    let lengths=new Array();

    createArray(divs,lengths);

    const buttons = document.querySelectorAll('div.sortingAlgos button');
    console.log(buttons);
    buttons.forEach(element => {
        element.addEventListener('click',()=>{
            console.log("inside event listener");
            executeAlgo(element,divs,lengths);
        })
    });

}
main();


