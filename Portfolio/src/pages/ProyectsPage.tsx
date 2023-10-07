import { Proyects } from "../data/DataBase"
import uniqid from 'uniqid'
import "../styles/ProyectsResponsive.css"

const ProyectsPage = () => {
  return (
    <div>

      <h1 className=" title-proyects text-6xl my-12 font-title md:text-8xl md:pb-0">Mis Proyectos</h1>
      {Proyects.map(item => {
        return (
          <div className=' proyect-container mb-20' key={uniqid()}>
          <div>
            <iframe className="frame border-b-black" src={item.link}   width="600vw" height="400vh"></iframe>
          </div>              

          <div className="info">
            <h2 className="page-name">{item.name}</h2>
            <p>{item.info}</p>
            <a className=" general-btn font-body text-white bg-black w-44 p-4 text-center"href={item.link}>Ver Mas </a>
          </div>
          
      </div>
        )
      })

      }

    </div>
  )
}

export default ProyectsPage
