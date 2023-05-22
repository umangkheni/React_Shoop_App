import React ,{useEffect,useState} from 'react'


export default function UseEffectHooke() {

const [Color, newColor] = useState('#ffffff')
    useEffect(() => {
        document.body.style.backgroundColor = Color;
    
    })
 const setColor=(col) =>{
    console.log(col);
    newColor(col)

 }
    
  return (
    <div>


        <input type="color" name="" id="" onChange={(v)=>{
setColor(v.target.value)
        }}/>


      
    </div>
  )
}
