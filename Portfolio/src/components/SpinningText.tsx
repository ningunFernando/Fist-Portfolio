import React from 'react'
import "../styles/SpinningStyle.css"

const SpinningText = ({text}) => {
    const lenght = text.length;
    const deg = 360/lenght;
    console.log(deg)
    
  return (
    <div className='spinning-text-wrapper mr-32 mt-32'>
      <div className='spinngin-text'><p>{text.split("").map((letra, i)=>(
            
        <span className='origin-center rotate-45' key={i} 
        
        style={{
            transform: "rotate(${deg * i}deg)",
        }}>
            {letra}
        </span>
        
      ))}</p></div>
    </div>
  )
  
}

export default SpinningText
