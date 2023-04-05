import React from 'react'
import Title from './Title'

export default function Randomizer() {

    const handleSecClick = (e) => {
        let body = document.querySelector("body");
        body.style.background = getRandomColor();
        e.target.style.backgroundColor = getRandomColor();
    }

    function getRandomColor() {
        let letters = "0123456789ABCDEF";
        let hex = "#";

        for (let i = 0; i < 6; i++) {
            hex += letters[Math.floor(Math.random() * 16)]
        }
        return hex
    }
  return (
    <div className='container m-auto text-center'>
      <Title text = {"Randomizer of background and buttons color"} classes={"mb-4"}/>
      <button className='btn btn-danger' onClick={handleSecClick}> Click me </button>
      <button className='btn btn-success'onClick={handleSecClick}> or me</button>
      <button className='btn btn-primary'onClick={handleSecClick}> and u can try click me </button>
      <button className='btn btn-warning'onClick={handleSecClick}> and me </button>
    </div>
  )
}
