import {Outlet} from 'react-router-dom'
import Menu from './Menu';

function Layout() {
  return (
    <div className='md:flex bg-gray-200 md:min-h-screen'>
      <div className='md:w-1/4 bg-zinc-800 px-5 py-10'>
        <h2 className='text-4xl font-black text-white'>Remitos Megatlon</h2>
        <Menu />
      </div>
      <div className='md:w-3/4 px-5 py-10'>
        <Outlet />
      </div>
    
    </div>
  )
}

export default Layout;
