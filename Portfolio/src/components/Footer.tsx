import { Link } from "react-router-dom"
import { Socials } from "../data/DataBase"
import uniqid from 'uniqid'
import "../NavResponsive.css"

const Footer = () => {
  return (
    <div className="Footer-container">
        <div>

        </div>
        <div className="socials-links">
            
        <div className='Footer'>
          {
            Socials.map(item => {
              return (
            <div className='socials-card' key={uniqid()}>
                <a href={item.link}>                  
                  <img src={item.img} alt="" />
                  <p>{item.name}</p>
                </a>
            </div>

              )
            })
          }
        </div> 
        </div>
    </div>
  )
}

export default Footer
