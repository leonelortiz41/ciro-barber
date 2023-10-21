import { useRef, useState } from 'react'
import '../App.css'
import logo2 from '../assets/logobarber2.svg'
import cejas from '../assets/cejas1.jpg'
import corte from '../assets/corte1.jpg'
import barba from '../assets/barba1.jpg'
import peinado from '../assets/peinado1.jpg'
import tintura from '../assets/tintura1.jpg'
import { RiWhatsappFill} from 'react-icons/ri';


export function Home() {

  return (
    <div id='Home'>
      <img src={logo2} className='mx-auto d-block logo2' alt="" />
      <div className='card-1 container'>
        <h2 className='mt-3 text-center'>Sobre nosotros</h2>
        <h6 className='mb-3 col-11 d-flex justify-content-center m-auto'>Inauguramos nuestra barberia en  2018 y nos complace dedicar nuestro mejor esfuerzo para mejorar la imagen de nuestros clientes.
          El objetivo es brindar el mejor servicio y marcar tendencia.
          Por eso construimos un espacio en el mundo para que disfrutes y te sientas cómodo.
          Ciro es tu lugar donde, más allá de cambiar tu look, puedes relajarte, disfrutar de una buena cerveza y encontrarte con amigos..</h6>
      </div>
    </div>
  )
}

export function Services() {
  const service = useRef(null);
  let [mostrar, setMostrar] = useState(false)
  document.addEventListener("scroll", () => {
    if (service.current.getBoundingClientRect().top < window.innerHeight / 1.7)
      setMostrar(true)
    else
      setMostrar(false)
  })
  return (
    <div id='Services' className={((mostrar == true) ? "animation" : "Services")} ref={service}>
      <h2 className='text-center m-auto mt-5'>Servicios</h2>

      <ul className='container-fluid row d-flex justify-content-center mx-auto '>
        <li className='card-1 col-sm-3 p-3 m-2'>
          <h3 className='text-center'>Corte de cabello</h3>
          <img src={corte} className='w-100' />
          <h4 className='text-success text-end'>$2000</h4>
          <h4>Marcamos tendencia con nuestros cortes en estilo clasico, fades o freestyle.</h4>
        </li>
        <li className='card-1 col-sm-3 p-3 m-2'>
          <h3 className='text-center'>tintura</h3>
          <img src={tintura} className='w-100' />
          <h4 className='text-success text-end'>$5000</h4>
          <h4>Para los gustos los colores... nuestros mejores coloristas haran que tu look se vea increible.</h4>
        </li>
        <li className='card-1 col-sm-3 p-3 m-2'>
          <h3 className='text-center'>barba</h3>
          <img src={barba} className='w-100' />
          <h4 className='text-success text-end'>$800</h4>
          <h4>Luce tu barba con el estilo que se merece.</h4>
        </li>
        <li className='card-1 col-sm-3 p-3 m-2'>
          <h3 className='text-center'>cejas</h3>
          <img src={cejas} className='w-100' />
          <h4 className='text-success text-end'>$400</h4>
          <h4>Mantén tus cejas limpias y perfiladas.</h4>
        </li>
        <li className='card-1 col-sm-3 p-3 m-2'>
          <h3 className='text-center'>peinados</h3>
          <img src={peinado} className='w-100' />
          <h4 className='text-success text-end'>$800</h4>
          <h4>Con productos de exelente calidad tu peinado quedará reluciente y con el mejor estilo.</h4>
        </li>
      </ul>
    </div>
  )
}

export function Reservation() {
  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Reservar de turno</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form className='d-flex flex-column' action="https://formsubmit.co/cirojuarez114@gmail.com" method="POST" onSubmit={() => {
              alert("su turno fue reservado con exito.");
              window.location.reload()
            }
            }>
              <input type='text' placeholder='Nombre' name='Nombre' />
              <input type='email' placeholder='Email' name='Email' />
              <input type='phone' placeholder='Telefono' name='Telefono' />
              <input type='datetime-local' name='Turno' />
              <div className="modal-footer">
                <button type="button" className="btn btn-cerrar" data-bs-dismiss="modal">Cerrar</button>
                <button type="submit" className="btn btn-reservar">reservar</button>
              </div>
              <input type='hidden' name='_next' value={window.location.href}></input>
              <input type='hidden' name='_captcha' value="false"></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Contacts() {

  return (
    <a href='https://wa.me/543813867770' target='_blank' className='wp'>
      <RiWhatsappFill/>
    </a>
  )
}