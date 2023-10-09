// @ts-nocheck 


const getSpeedVal = () => {
    let speedEl = document.getElementById('speed-slider');
    let speedVal = speedEl.value;
    return speedVal;
}

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
const startBubbleSort = async () => {
    // console.log('In bubbe()');
    const ele = document.querySelectorAll(".array-el-bar div");
    for (let i = 0; i < ele.length - 1; i++) {
        // console.log('In ith loop');
        for (let j = 0; j < ele.length - i - 1; j++) {

            // console.log('In jth loop');
            ele[j].style.background = 'blue';
            ele[j + 1].style.background = 'blue';
            if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
                // console.log('In if condition');

                await waitforme(getSpeedVal());
                swap(ele[j], ele[j + 1]);
            }
            ele[j].style.background = 'cyan';
            ele[j + 1].style.background = 'cyan';
        }
        ele[ele.length - 1 - i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}



async function partitionLomuto(ele, l, r) {
    let i = l - 1;
    // color pivot element
    ele[r].style.background = 'red';
    for (let j = l; j <= r - 1; j++) {

        // color current element
        ele[j].style.background = 'yellow';
        // pauseChamp
        await waitforme(getSpeedVal());

        if (parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {

            i++;
            swap(ele[i], ele[j]);
            // color 
            ele[i].style.background = 'orange';
            if (i != j) ele[j].style.background = 'orange';
            // pauseChamp
            await waitforme(getSpeedVal());
        }
        else {
            // color if not less than pivot
            ele[j].style.background = 'pink';
        }
    }
    i++;
    // pauseChamp
    await waitforme(getSpeedVal());
    swap(ele[i], ele[r]); // pivot height one
    // console.log(`i = ${i}`, typeof (i));
    // color
    ele[r].style.background = 'pink';
    ele[i].style.background = 'green';

    // pauseChamp
    await waitforme(getSpeedVal());

    // color
    for (let k = 0; k < ele.length; k++) {
        if (ele[k].style.background != 'green')
            ele[k].style.background = 'cyan';
    }

    return i;
}

async function quickSort(ele, l, r) {
    // console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
    if (l < r) {
        let pivot_index = await partitionLomuto(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else {
        if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}


const startQuickSort = async () => {
    let ele = document.querySelectorAll('.array-el-bar div');
    let l = 0;
    let r = ele.length - 1;
    await quickSort(ele, l, r);
}

//let delay = 30;
async function merge(ele, low, mid, high) {
    // console.log('In merge()');
    // console.log(`low=${low}, mid=${mid}, high=${high}`);
    const n1 = mid - low + 1;
    const n2 = high - mid;
    // console.log(`n1=${n1}, n2=${n2}`);
    let left = new Array(n1);
    let right = new Array(n2);

    for (let i = 0; i < n1; i++) {

        await waitforme(getSpeedVal());
        // console.log('In merge left loop');
        // console.log(ele[low + i].style.height + ' at ' + (low + i));
        // color
        ele[low + i].style.background = 'orange';
        left[i] = ele[low + i].style.height;
    }
    for (let i = 0; i < n2; i++) {

        await waitforme(getSpeedVal());
        // console.log('In merge right loop');
        // console.log(ele[mid + 1 + i].style.height + ' at ' + (mid + 1 + i));
        // color
        ele[mid + 1 + i].style.background = 'yellow';
        right[i] = ele[mid + 1 + i].style.height;
    }

    await waitforme(getSpeedVal());
    let i = 0, j = 0, k = low;
    while (i < n1 && j < n2) {

        await waitforme(getSpeedVal());


        // To add color for which two r being compared for merging

        if (parseInt(left[i]) <= parseInt(right[j])) {
            // color
            if ((n1 + n2) === ele.length) {
                ele[k].style.background = 'green';
            }
            else {
                ele[k].style.background = 'lightgreen';
            }

            ele[k].style.height = left[i];
            i++;
            k++;
        }
        else {
            // color
            if ((n1 + n2) === ele.length) {
                ele[k].style.background = 'green';
            }
            else {
                ele[k].style.background = 'lightgreen';
            }
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while (i < n1) {

        await waitforme(getSpeedVal());
        // color
        if ((n1 + n2) === ele.length) {
            ele[k].style.background = 'green';
        }
        else {
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = left[i];
        i++;
        k++;
    }
    while (j < n2) {

        await waitforme(getSpeedVal());
        // color
        if ((n1 + n2) === ele.length) {
            ele[k].style.background = 'green';
        }
        else {
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(ele, l, r) {
    // console.log('In mergeSort()');
    if (l >= r) {
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
}

const startMergeSort = async () => {
    let ele = document.querySelectorAll('.array-el-bar div');
    let l = 0;
    let r = parseInt(ele.length) - 1;

    await mergeSort(ele, l, r);

}

async function selection() {
    const ele = document.querySelectorAll('.array-el-bar div');
    for (let i = 0; i < ele.length; i++) {
        let min_index = i;
        // Change color of the position to swap with the next min
        ele[i].style.background = 'blue';
        for (let j = i + 1; j < ele.length; j++) {

            // Change color for the current comparision (in consideration for min_index)
            ele[j].style.background = 'red';

            await waitforme(getSpeedVal());
            if (parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)) {
                if (min_index !== i) {
                    // new min_index is found so change prev min_index color back to normal
                    ele[min_index].style.background = 'cyan';
                }
                min_index = j;
            }
            else {
                // if the currnent comparision is more than min_index change is back to normal
                ele[j].style.background = 'cyan';
            }
        }

        await waitforme(getgetSpeedVal()());
        swap(ele[min_index], ele[i]);
        // change the min element index back to normal as it is swapped 
        ele[min_index].style.background = 'cyan';
        // change the sorted elements color to green
        ele[i].style.background = 'green';
    }
}

const startSelectionSort = (async () => {
    await selection();
});


function waitforme(milisec: number) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;

}






let sortingAlgos = {
    startBubbleSort: startBubbleSort,
    startQuickSort: startQuickSort,
    startMergeSort: startMergeSort,
    startSelectionSort: startSelectionSort
}

export {
    reBuildArray,
    sortingAlgos,
    waitforme
}
