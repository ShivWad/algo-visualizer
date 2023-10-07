// @ts-nocheck 
const reBuildArray = (range: number) => {
    const min = 5;
    const max = 1000;
    let tempArr: number[] = [];
    for (let i = 1; i <= range; i++) {
        let randomInt = Math.floor(Math.random() * (max - min + 1) + min);
        tempArr.push(randomInt);
    }
    return tempArr;
}
const bubbleSort = async () => {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".array-el-bar div");
    for (let i = 0; i < ele.length - 1; i++) {
        console.log('In ith loop');
        for (let j = 0; j < ele.length - i - 1; j++) {
            console.log('In jth loop');
            ele[j].style.background = 'blue';
            ele[j + 1].style.background = 'blue';
            if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
                console.log('In if condition');
                await waitforme(200);
                swap(ele[j], ele[j + 1]);
            }
            ele[j].style.background = 'cyan';
            ele[j + 1].style.background = 'cyan';
        }
        ele[ele.length - 1 - i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}
function waitforme(milisec: number) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

function swap(el1, el2) {
    console.log('In swap()');

    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;

}

let sortingAlgos = {
    bubbleSort: bubbleSort
}

export {
    reBuildArray,
    sortingAlgos,
    waitforme
}
