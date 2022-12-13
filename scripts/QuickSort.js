import { waitforme } from "./main.js";
let delay=document.querySelector('#speed').value;
delay = 1500-delay;
document.querySelector('#speed').addEventListener('input',()=>{
    delay = document.querySelector('#speed').value;
    delay=1500-delay;
})

export async function quickSort(divs,lengths){
    await sorting(divs,lengths,0,divs.length-1);

    console.log(lengths,divs);
}

async function colorGreen(i,j,divs){
    for(let k=i;k<j;k++){
        divs[k].style.backgroundColor='green';
        await waitforme(100);
    }
}

async function sorting(divs , lengths, i,j){
    if(i>j){
        return;
    }
    await waitforme(100);
    divs[j].style.backgroundColor = 'orange';
    let idx = await partition(divs,lengths,lengths[j],i,j);
    divs[idx].style.backgroundColor = 'green';
    await waitforme(100);
    let leftIdx = await sorting(divs,lengths,i,idx-1);
    // await colorGreen(leftIdx+1,idx-1,divs);
    let rightIdx = await sorting(divs,lengths,idx+1,j);
    // await colorGreen(idx+1,rightIdx-1,divs);
    // phir yaha color hogaa idx+1 to j
    return idx;
}

async function partition(divs,lengths,pivot,l,r){
    let i=l,j=l;

    while(i<=r){
        divs[j].style.backgroundColor='cyan';
        divs[i].style.backgroundColor='blue';
        await waitforme(100);
        if(lengths[i]<=pivot){
            if(i!=j){
                swap(divs,lengths,i,j);
                divs[i].style.backgroundColor='cyan';
                divs[j].style.backgroundColor='blue';
                await waitforme(100);
            }
            divs[i].style.backgroundColor='grey';
            divs[j].style.backgroundColor='red';
            j++;
            i++;
        }else{
            divs[i].style.backgroundColor='grey';
            i++;
        }
    }
    return j-1;
}

function swap(divs, lengths, i, j){
    let temp = lengths[i];
    lengths[i] = lengths[j];
    lengths[j] = temp;

    temp = divs[i].style.height;
    divs[i].style.height = divs[j].style.height;
    divs[j].style.height = temp;
}