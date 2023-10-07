import React, { useState } from 'react'
import { setRange, setSelectedSortAlgo, setIsSorting, setUnSortedArr } from '../../redux/globalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { reBuildArray } from '../utils';
const sortingAlgorithms = ["Merge", "Quick", "Heap", "Bubble"]

const ConfigBar = () => {
    const [sliderOpen, setSliderOpen] = useState<boolean>();
    const [localRange, setLocalRange] = useState(80);
    // const [sortAlgorithm, setSortAlogrithm] = useState("");
    //@ts-ignore
    const isSorting = useSelector((state) => state.globalSlice.isSorting);

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
        <div className={`config-bar ${isSorting ? "disable" : ""}`}>
            <button className='global-button' onClick={() => handleGenerateNewArray()}>Generate New Array</button>
            <div className='stack-button'>
                <button className='global-button' onClick={() => setSliderOpen(!sliderOpen)}>Speed && Array Size</button>
                <input onChange={(e) => handleSliderChange(e)} type="range" min="5" max="160" value={localRange} className={`slider ${sliderOpen ? "open" : "close"}`} id="myRange" />
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
    )
}

export default ConfigBar