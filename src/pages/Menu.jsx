import React from 'react';
import {Link, useLocation} from 'react-router-dom'



function Menu() {
  
  const location = useLocation()
  const urlLocation = location.pathname
  

  return (
      <nav className='mt-10'>
        <Link className={`${urlLocation === '/nuevo' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-orange-400`}
          to='/nuevo'>
          Nuevo remito
        </Link>
        <Link className={`${urlLocation === '/historico' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-orange-400`}
           to='/historico'>
          Historial
        </Link>
      </nav>
  )
}


export default Menu;
