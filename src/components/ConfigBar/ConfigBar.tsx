import React, { useEffect, useState } from 'react'
import { setRange, setSelectedSortAlgo, setUnSortedArr } from '../../redux/globalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { reBuildArray } from '../utils';
const sortingAlgorithms = ["Merge", "Quick", "Selection", "Bubble"]

const ConfigBar = () => {
    const [sliderOpen, setSliderOpen] = useState<boolean>();
    const [localRange, setLocalRange] = useState(0);
    const [max, setMaxRange] = useState<number>();
    const [speed, setSpeed] = useState<number>(250);
    // const [sortAlgorithm, setSortAlogrithm] = useState("");
    //@ts-ignore
    const isSorting = useSelector((state) => state.globalSlice.isSorting);

    useEffect(() => {
        let el = document.getElementById("array-el-bar-id");
        console.log(el);
        let width = el?.offsetWidth;

        console.log("height>>>", width)
        if (width == undefined) {
            setMaxRange(130)
            return;
        }
        let maxNumberOfEls = width / 7;

        setMaxRange(maxNumberOfEls);
        setLocalRange(maxNumberOfEls / 2);
        console.log("maxNumberOfEls>>>", maxNumberOfEls);

    }, [])

    const dispatch = useDispatch();
    //@ts-ignore
    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setRange(e.target.value);
        setLocalRange(parseInt(e.target.value));
        dispatch(setRange({ range: e.target.value }));
    }
    const handleAlgoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSelectedSortAlgo({ selectedSort: e.target.value }))
    }

    const handleGenerateNewArray = () => {
        let tempArr = reBuildArray(localRange);
        dispatch(setUnSortedArr({ newUnsortedArr: tempArr }));
    }

    return (
        <>
            <div className={`config-bar ${isSorting ? "disable" : ""}`}>
                <button className='global-button' onClick={() => handleGenerateNewArray()}>Generate New Array</button>
                <div className='stack-button'>
                    <button className='global-button' onClick={() => setSliderOpen(!sliderOpen)}>Array Size: {localRange.toFixed()}</button>
                    <input onChange={(e) => handleSliderChange(e)} type="range" min="5" max={max} value={localRange} className={`slider ${sliderOpen && !isSorting ? "open" : "close"}`} id="myRange" />
                </div>

                <div>
                    <select className=' global-button ' onChange={(e) => handleAlgoChange(e)} id="mounth">
                        <option value="hide" style={{ display: "none" }}>Select sorting algorithm!</option>
                        {sortingAlgorithms.map((algo, index) => {
                            return <option value={algo} key={index}>
                                {algo}
                            </option>
                        })}

                    </select>

                </div>
            </div>

            <div className='change-speed' >
                <h2>
                    Add Delay: {speed}ms
                </h2>
                <input id="speed-slider" type="range" onChange={(e) => setSpeed(parseInt(e.target.value))} min="50" value={speed} max="500" />


            </div>
        </>

    )
}

export default ConfigBar