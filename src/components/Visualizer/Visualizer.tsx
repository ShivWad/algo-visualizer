
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { reBuildArray, sortingAlgos, waitforme } from '../utils';
import { setIsSorting } from '../../redux/globalSlice';
const Visualizer = () => {
    const [inputArr, setInputArr] = useState<number[]>([1, 2, 3, 4, 5]);
    const dispatch = useDispatch();
    //@ts-ignore
    const range = useSelector((state) => state.globalSlice.range);
    //@ts-ignore
    const selectedAlgo = useSelector((state) => state.globalSlice.selectedSortAlgo);
    //@ts-ignore
    const newUnsortedArr = useSelector((state) => state.globalSlice.unSortedArr);
    useEffect(() => {
        let tempArr = reBuildArray(80);
        setInputArr(tempArr);
    }, [])



    useEffect(() => {
        let tempArr = reBuildArray(range);
        setInputArr(tempArr);
    }, [range]);


    useEffect(() => {
        setInputArr(newUnsortedArr);
    }, [newUnsortedArr]);

    useEffect(() => {

        switch (selectedAlgo) {

            case "Bubble":
                const foo = async () => {
                    dispatch(setIsSorting({ isSorting: true }));
                    await sortingAlgos.bubbleSort();
                    dispatch(setIsSorting({ isSorting: false }))
                }
                foo();
                break;
        }


    }, [selectedAlgo])

    return (
        <div className='array-el-bar' id='array-el-bar-id'>
            {inputArr?.map((el, index) => {
                return <div key={index} style={{ height: `${el / 1.5}px` }}></div>
            })}
        </div>
    )
}

export default Visualizer