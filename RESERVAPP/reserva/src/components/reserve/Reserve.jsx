import React from 'react'
import "./reserve.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const Reserve = ({setOpen, hotelId}) => {
  return (
    <div className='reserve'>
      <div className='rContainer'>
        <FontAwesomeIcon
        icon={faCircleXmark}
        className='rClose'
        onClick={() => setOpen(false)}
        />
        <span>Seleccione habitaciones:</span>
      </div>
    </div>
  )
}

export default Reserve