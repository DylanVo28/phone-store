/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import InputRange from "react-input-range"
import {useState,useEffect} from "react"
const InputRangeM8=(props)=>{
    const [stMax,setStMax]=useState(props.max)
    const [stMin,setStMin]=useState(props.min)
    const [stValue,setStValue]=useState(props.value) 
    return <>
        <style>
            {`
            .input-range__slider {
                -webkit-appearance: none;
                   -moz-appearance: none;
                        appearance: none;
                background: #0061af;
                border: 1px solid #0061af;
                border-radius: 100%;
                cursor: pointer;
                display: block;
                height: 1rem;
                margin-left: -0.5rem;
                margin-top: -0.65rem;
                outline: none;
                position: absolute;
                top: 50%;
                -webkit-transition: box-shadow 0.3s ease-out, -webkit-transform 0.3s ease-out;
                transition: box-shadow 0.3s ease-out, -webkit-transform 0.3s ease-out;
                transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
                transition: transform 0.3s ease-out, box-shadow 0.3s ease-out, -webkit-transform 0.3s ease-out;
                width: 1rem; }
                .input-range__slider:active {
                  -webkit-transform: scale(1.3);
                          transform: scale(1.3); }
                .input-range__slider:focus {
                  box-shadow: 0 0 0 5px rgba(63, 81, 181, 0.2); }
                .input-range--disabled .input-range__slider {
                  background: #cccccc;
                  border: 1px solid #cccccc;
                  box-shadow: none;
                  -webkit-transform: none;
                          transform: none; }
              
              .input-range__slider-container {
                -webkit-transition: left 0.3s ease-out;
                transition: left 0.3s ease-out; }
              
              .input-range__label {
                color: #aaaaaa;
                font-family: "Helvetica Neue", san-serif;
                font-size: 0.8rem;
                -webkit-transform: translateZ(0);
                        transform: translateZ(0);
                white-space: nowrap; }
              
              .input-range__label--min,
              .input-range__label--max {
                bottom: -1.4rem;
                position: absolute; }
              
              .input-range__label--min {
                left: 0; }
              
              .input-range__label--max {
                right: 0; }
              
              .input-range__label--value {
                position: absolute;
                top: -1.8rem; }
              
              .input-range__label-container {
                left: -50%;
                position: relative; }
                .input-range__label--max .input-range__label-container {
                  left: 50%; }
              
              .input-range__track {
                background: #eeeeee;
                border-radius: 0.3rem;
                cursor: pointer;
                display: block;
                height: 0.3rem;
                position: relative;
                -webkit-transition: left 0.3s ease-out, width 0.3s ease-out;
                transition: left 0.3s ease-out, width 0.3s ease-out; }
                .input-range--disabled .input-range__track {
                  background: #eeeeee; }
              
              .input-range__track--background {
                left: 0;
                margin-top: -0.15rem;
                position: absolute;
                right: 0;
                top: 50%; }
              
              .input-range__track--active {
                background: #0061af; }
              
              .input-range {
                height: 1rem;
                position: relative;
                width: 100%; 
                margin-top: 20px;
              }
            `}
        </style>
    <InputRange
    maxValue={props.max}
    minValue={props.min}
    onChange={props.onChange}
    onChangeComplete={props.handleChange}
    value={props.value}
     />
     </>
}
export default InputRangeM8