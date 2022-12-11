import { waitforme } from "./main.js";
export async function selectionSort(divs, lengths) {
    for (let i = 0; i < lengths.length - 1; i++) {
        let smallerLen = i;
        let smallerDiv = i;
        for (let j = i + 1; j < lengths.length; j++) {
            divs[i].style.backgroundColor = 'blue';
            divs[j].style.backgroundColor = 'cyan';
            await waitforme(1000);
            if (lengths[j] < lengths[smallerLen]) {
                smallerLen = j;
                divs[smallerDiv].style.backgroundColor = 'red';
                smallerDiv = j;
                divs[smallerDiv].style.backgroundColor = 'yellow';
            } else {
                divs[j].style.backgroundColor = 'red';
            }
        }
        swapLen(i, smallerLen, lengths);
        swapDiv(i, smallerLen, divs);
        divs[i].style.backgroundColor = 'yellow';
        divs[smallerLen].style.backgroundColor = 'blue';
        await waitforme(1000);
        divs[smallerLen].style.backgroundColor = 'red';
        divs[i].style.backgroundColor = 'green';
        await waitforme(1000);
    }
    divs[lengths.length - 1].style.backgroundColor = 'green';
}

function swapLen(i, j, lengths) {
    let tempLen = lengths[i];
    lengths[i] = lengths[j];
    lengths[j] = tempLen
}

function swapDiv(i, j, divs) {
    let tempH = divs[i].style.height;
    divs[i].style.height = divs[j].style.height;
    divs[j].style.height = tempH;
}