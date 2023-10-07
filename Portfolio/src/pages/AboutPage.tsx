
import "../styles/aboutResponsive.css"
import { Link } from 'react-router-dom'
import uniqid from 'uniqid'
import { Technologies, Programas } from '../data/DataBase'
const AboutPage = () => {
  return (
    <div className=''>

      <div className='about-container m-3'>
      <div className='about-me-container font-body '>
        <div className='text-container'>
        <h2 className='title font-title'>Sobre mi</h2>
        <p className='presentation mb-12 text-xl'>Mi nombre es Fernando Patiño soy desarrollador web front end y fotografo, 
        actualmente cursando la carrera de desarrollo en sofware interactivo y videojuegos en el 
        instituto universitario amerike, desde hace 1 año me dedico a la venta y diseño de sitios web asi como fotografia 
        freelance lo cual me ha llevado a aprender bastantes tecnologias y habilidades que me han ayudado bastante en este 
        tiempo de aprendizaje</p>
        <Link to="/proyects" className='general-btn font-body  text-xl text-white bg-black w-44 p-4 text-center'> Ve mi trabajo</Link>
        </div>

      </div>

        <h2 className='section-title font-title mb-12 mt-28 text-5xl'>Leguajes</h2>
        <div className='lengs-container'>
          {
            Technologies.map(item => {
              return (
                <div className='card' key={uniqid()}>
                  <img src={item.img} alt="" />
                  <p className='card-text'>{item.name}</p>
                </div>
              )
            })
          }
        </div> 

        <h2 className='section-title font-title mb-12 mt-20 text-5xl'>Tecnologias</h2>
        <div className='lengs-container'>
          {
            Programas.map(item => {
              return (
                <div className='card' key={uniqid()}>
                  <img src={item.img} alt="" />
                  <p className='card-text'>{item.name}</p>
                </div>
              )
            })
          }
        </div> 

      </div>

    </div>
  )
}

export default AboutPage
