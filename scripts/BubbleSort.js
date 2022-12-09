import { waitforme } from "./main.js";
export async function bubbleSort(divs,lengths){
    console.log("heeeeeeeeeeyyyyyyyyyyyyyyyyyyy");
    console.log(divs,lengths);
    
    for(let i=1;i<lengths.length;i++){
        for(let j=1;j<=lengths.length-i;j++){
            
            if(lengths[j]<lengths[j-1]){
                divs[j].style.backgroundColor='blue';
                divs[j-1].style.backgroundColor='blue';
                await waitforme(100);
                swap(j-1,j,lengths);
                swapDiv(j,j-1,divs);
                divs[j].style.backgroundColor='red';
                divs[j-1].style.backgroundColor='red';
            }else{
                divs[j].style.backgroundColor='blue';
                divs[j-1].style.backgroundColor='blue';
                await waitforme(100);
                divs[j].style.backgroundColor='red';
                divs[j-1].style.backgroundColor='red';
            }
        }
        divs[lengths.length-i].style.backgroundColor="green";
    }
    divs[0].style.backgroundColor='green';
    console.log(divs,lengths);
}

function swap(i,j,lengths){ 
    let temp = lengths[i];
    lengths[i]=lengths[j];
    lengths[j]=temp;
}

function swapDiv(i,j,divs){
    let temp = divs[i].style.height;
    divs[i].style.height = divs[j].style.height;
    divs[j].style.height = temp;
}