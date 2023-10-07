import { Proyects } from "../data/DataBase"
import {uniqid} from 'uniqid'

const ProyectsPage = () => {
  return (
    <div className=''>
      <h1 className="font-title text-6xl">Mis Proyectos</h1>
      {Proyects.map(item => {
        return (
          <div className='flex flex-row space-x-96 even:flex-row-reverse  even:space-x-reverse place-content-center mb-24' key={uniqid()}>
          <div>
            <img className="w-100 h-80" src={item.img} alt="" />
          </div>              

          <div>
            <p>{item.name}</p>
            <p>{item.info}</p>
            <a href={item.link}>Ver</a>
          </div>
          
      </div>
        )
      })

      }
    </div>
  )
}

export default ProyectsPage
