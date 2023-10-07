
import SpinningText from '../components/SpinningText'
import { Link } from 'react-router-dom'
import "../styles/HomeResponsive.css"

const HomePage = () => {
  return (
    <div className='home-container bg-white'>
     
        <div className=' data-container '>
          <h1 className='title text-8xl font-title '>
          Desarrollador web</h1>
          <h2 className='title text-8xl font-title '>y Fotografo</h2>

          <p className='place font-title text-3xl'>Guadalajara Mexico</p>

        <Link to={"contact"} className=' contact-btn font-body  text-2xl text-white bg-black w-44 p-4 text-center'>Contactame</Link>
        </div>
        <div className='z-0'>
          <SpinningText text='- Programador - Fotografo - Estudiante '/>
        </div>
      
      

    </div>
  )
}

export default HomePage
