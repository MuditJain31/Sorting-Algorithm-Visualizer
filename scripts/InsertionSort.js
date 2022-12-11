//color implemetation remaining
import { waitforme } from "./main";
function insertionSort(divs,lengths){
    for(let i=1;i<lengths.length;i++){
        for(let j=i;j>0;j--){
            if(lengths[j]<lengths[j-1]){
                swap(j,j-1,lengths);
                swap(j,j-1,divs);
            }else{
                break;
            }
        }
    }
}

function swapLen(i,j,lengths){
    let temp = lengths[i];
    lengths[i] = lengths[j];
    lengths[j] = temp;
}

function swapDiv(i,j,divs){
    let temp = divs[i].style.height;
    divs[i].style.height = divs[j].style.height;
    divs[j].style.height = temp;
}