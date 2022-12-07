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

function main(){
    const buttons = document.querySelectorAll('div.sortingAlgos button');
    console.log(buttons);
    let divs=new Array();
    let length=new Array();
    buttons.forEach(element => {
        element.addEventListener('click',()=>{
            console.log("inside event listener");
            createArray(divs,length);
        })
    });
    console.log(divs,length);

}
main();