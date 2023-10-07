import "../styles/ContactResponsive.css"

const ContactPage = () => {
  return (
    <div className=' w-full h-full justify-center flex m-3'>
        <div className="form-container h-100 flex flex-col ">
          <h1 className="form-title font-title text-6xl my-16"> Contactame</h1>

          <form className="form flex flex-col gap-5" action="https://formsubmit.co/fernando.ibarra.pf@gmail.com" method="POST">
            <input className="my-6" type="text" name="name"  placeholder="nombre" required/>
            <input className="my-6" type="email" name="email"  placeholder="Correo" required/>
            <input className="my-6" type="hidden" name="_autoresponse" value="Su mensaje Fue Recibido 👉👈"></input>
            <textarea className="my-6" name="Message" cols={10} rows={0} id="" placeholder="mensaje"></textarea>
            <button className=" general-btn my-6 font-body  text-2xl text-white bg-black w-44 p-4 text-center" type="submit">Enviar</button>
          </form>

        </div>
    </div>
  )
}

export default ContactPage
