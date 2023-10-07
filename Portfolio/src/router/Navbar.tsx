import { useState } from 'react';
import { Link } from 'react-router-dom';
import uniqid from "uniqid"
import { NavRoutes } from '../data/props';
import "../NavResponsive.css"

const NavBar = () => {

  const [open, setOpen] = useState<boolean>(false)
  const body = document.querySelector("body");

  const links : Array<NavRoutes>= [ 
    {name: "Home", route: "/home"},
    {name: "Sobre mi", route: "/about"},
    {name: "Proyectos", route: "/proyects"},
    {name: "Contacto", route: "/contact"},
  ]

  window.addEventListener("resize", () => {
    if(window.screen.width >= 768){
      setOverflow(true)
    }
    else{
      if(open)
        onClickEvent()
      else{
        setOverflow(true)
      }
    }
  })

  const onClickEvent = ()=>{

    setOpen(!open);

    setOverflow(open)
  }

  const setOverflow = (value : boolean) => {
    if (value){
      body?.classList.remove("overflow-hidden")
    }
    else{
      body?.classList.add("overflow-hidden")
    }
  }

  return (
    <>
    <nav className='nav font-body flex flex-row space gap-4 text-2xl place-content-between border  
    border-b-black sticky top-0 z-20'>

      <Link to={"/home"} className='h-full w-20 static flex items-center ml-10 flex flex-row-reverse justify-start'>
      <div className='h-full w-16 static flex items-center '>

          <div className='flex justify-center p-9'>
            <svg className='w-20 h-9 m-0' version="1.0" xmlns="http://www.w3.org/2000/svg"  width="300.000000pt" height="243.000000pt" viewBox="0 0 300.000000 243.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,243.000000) scale(0.050000,-0.050000)" fill="#000000" stroke="none"> <path d="M5890 4780 c7 -11 26 -20 42 -20 17 0 26 -7 21 -15 -5 -9 2 -31 16 -51 24 -32 26 -29 24 24 -1 33 -6 56 -10 52 -4 -4 -29 1 -56 11 -32 12 -45 12 -37 -1z"/> <path d="M641 4345 c-161 -82 -150 24 -156 -1531 -6 -1501 -10 -1450 108 -1554 l68 -60 990 0 989 0 0 -136 0 -137 -115 -46 c-568 -232 -653 -304 -503 -429 l61 -52 940 0 c1065 0 1056 -1 1056 150 0 90 -15 102 -220 191 -104 44 -225 97 -269 117 -44 20 -99 43 -123 50 -39 12 -43 26 -40 148 l3 134 990 10 c1098 11 1057 6 1121 147 36 79 38 152 39 1455 l0 1372 -45 68 c-99 148 84 138 -2505 138 -2169 0 -2324 -2 -2389 -35z m4710 -187 c23 -37 26 -2704 4 -2733 -14 -18 -95 -25 -277 -25 l-257 0 2 102 c3 137 -43 184 -196 198 l-112 10 -76 178 -77 178 59 55 c155 145 148 175 -108 435 -266 271 -296 282 -438 147 -84 -80 -53 -82 -305 24 l-120 51 -10 111 c-18 190 -41 201 -410 201 -370 0 -399 -14 -396 -189 2 -112 -5 -120 -144 -171 -55 -20 -118 -48 -139 -63 -60 -41 -106 -33 -144 24 -102 157 -183 137 -434 -109 -277 -270 -301 -355 -134 -457 43 -26 55 -103 22 -136 -11 -11 -41 -78 -68 -149 l-49 -130 -110 -10 c-152 -14 -194 -55 -194 -193 l0 -107 -256 0 c-172 0 -264 8 -280 24 -35 35 -35 2697 0 2732 33 33 4627 35 4647 2z m-2040 -1301 c2 -138 21 -164 162 -216 60 -23 144 -59 187 -81 120 -61 176 -52 274 44 l86 85 190 -189 c220 -219 213 -200 110 -312 -98 -107 -99 -82 14 -350 104 -243 119 -258 277 -258 l89 0 0 -90 0 -91 -413 6 -412 5 -27 105 c-216 843 -1394 843 -1638 0 l-33 -115 -408 0 -409 0 0 90 0 90 89 0 c138 0 185 31 231 154 22 59 62 151 90 206 66 130 64 146 -30 248 -103 112 -110 93 110 312 l190 189 86 -85 c98 -96 154 -105 274 -44 43 22 128 59 189 81 129 49 151 80 151 214 0 131 -10 127 298 121 l271 -6 2 -113z m7 -882 c189 -70 442 -387 442 -555 0 -13 -263 -20 -732 -20 l-732 0 12 48 c69 278 346 542 590 565 50 5 94 13 100 18 17 18 212 -16 320 -56z m-80 -980 l-4 -205 203 -80 c112 -44 203 -87 203 -95 0 -8 -274 -15 -610 -15 -335 0 -610 7 -610 16 0 9 83 46 185 83 246 91 230 69 219 301 l-9 200 213 0 214 0 -4 -205z"/> </g> </svg> 
            <p className='font-body ' >Fernando</p>
          </div>

      </div>
      </Link>

      <div className=' bg-black text-5xl mt-6 mr-10 z-20 md:hidden h-12 w-12' onClick={ onClickEvent }>
        <img src={open ? "" : ""} className='invert ' />
      </div>

      <div className='h-26 md:flex hidden justify-end md:w-1/2'>
      {links.map(item => {
          return (
          <Link to={item.route} className='p-9 font-body last:bg-black last:text-white' key={uniqid()}>
            {item.name}
          </Link>
          )
        })}
      </div>

      {/* Celulares */}
      <div className={` phone-nav bg-gray-100 md:hidde gap-20 pl-10 fixed h-screen w-screen top-0 z-100 flex flex-col items-start justify-center duration-700 ${open ? "left-0" : 'left-[-100%]'}`}>
      {links.map(item => {
          return (
          <Link to={item.route} className='custom-btn button' key={uniqid()} onClick={onClickEvent}>
            {item.name}
          </Link>
          )
        })}
      </div>

    </nav>
    </>
  )
}

export default NavBar;