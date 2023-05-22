import React,{ useState } from 'react'

export default function StateHooke() {

const [Count, setCount] = useState('0');

function increment (inc){
  setCount(++inc)

};

  return (
    <div>
      <h1>{Count}</h1>
      <button className="btn btn-secondary"  onClick={()=>{increment(Count)}}>increment</button> 
    </div>
  )
};
