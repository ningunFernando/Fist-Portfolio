import { Routes, Route } from "react-router-dom"
import Navbar from "./Navbar"
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import ProyectsPage from "../pages/ProyectsPage"
import ContactPage from "../pages/ContactPage"



const AppRouter = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
            <Route path="/*" element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/proyects" element={<ProyectsPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>

      </Routes>
    </div>
  )
}

export default AppRouter
