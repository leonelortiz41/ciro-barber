import { useRef, useState } from 'react'
import '../App.css'
import logo2 from '../assets/logobarber2.svg'
import cejas from '../assets/cejas1.webp'
import whatsapp from '../assets/whatsapp.png'

export function Home() {

  return (
    <div id='Home'>
      <img src={logo2} className='mx-auto d-block logo2' alt="" />
      <div className='card-1 container'>
        <h2 className='mt-3 text-center'>Sobre nosotros</h2>
        <h6 className='mb-3 col-11 d-flex justify-content-center m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt voluptate sint. Deserunt vitae tempore repellat voluptates harum obcaecati sint ad officiis eius eaque, dignissimos molestias quidem porro nisi voluptas.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, accusamus officiis. Porro quo dolorum excepturi iusto minima dolorem atque deleniti, eius repellat aperiam, rerum expedita corporis asperiores cupiditate nihil accusamus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus quas necessitatibus quo quisquam aspernatur laboriosam quod expedita voluptas nihil est eveniet officia harum temporibus dolorem, earum iure nostrum sapiente.</h6>
      </div>
    </div>
  )
}

export function Services() {
  const service=useRef(null);
  let [mostrar,setMostrar]=useState(false)
  document.addEventListener("scroll", () => {
    if(service.current.getBoundingClientRect().top<window.innerHeight/1.7)
    setMostrar(true)
    else
    setMostrar(false)
  })
  return (
    <div id='Services' className={(mostrar==true) ? "animation" : "Services"} ref={service}>
      <h2 className='text-center m-auto mt-5'>Servicios</h2>

      <ul className='container-fluid row d-flex justify-content-center '>
        <li className='card-1 col-sm-3 p-3 m-2'>
          <h3 className='text-center'>Corte de cabello</h3>
          <img src={cejas} className='w-100' />
          <h4 className='text-success text-end'>price</h4>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptas commodi eligendi suscipit cumque, nihil rep</h4>
        </li>
        <li className='card-1 col-sm-3 p-3 m-2'>
          <h3 className='text-center'>tintura</h3>
          <h4 className='text-success text-end'>price</h4>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptas commodi eligendi suscipit cumque, nihil rep</h4>
        </li>
        <li className='card-1 col-sm-3 p-3 m-2'>
          <h3 className='text-center'>barba</h3>
          <h4 className='text-success text-end'>price</h4>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptas commodi eligendi suscipit cumque, nihil rep</h4>
        </li>
        <li className='card-1 col-sm-3 p-3 m-2'>
          <h3 className='text-center'>cejas</h3>
          <img src={cejas} className='w-100' />
          <h4 className='text-success text-end'>price</h4>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptas commodi eligendi suscipit cumque, nihil rep</h4>
        </li>
        <li className='card-1 col-sm-3 p-3 m-2'>
          <h3 className='text-center'>peinados</h3>
          <h4 className='text-success text-end'>price</h4>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptas commodi eligendi suscipit cumque, nihil rep</h4>
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
            <form className='d-flex flex-column'>
              <input type='text' placeholder='Nombre' />
              <input type='email' placeholder='Email' />
              <input type='phone' placeholder='Telefono' />
              <input type='datetime-local' />
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-cerrar" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" className="btn btn-reservar">reservar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Contacts() {

  return (
    <a href=''>
      <img src={whatsapp} className='wp'></img>
    </a>
  )
}