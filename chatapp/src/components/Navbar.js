import { NavLink } from 'react-router-dom'

function Navbar() {
    return <nav className='flex justify-between px-5 py-6 top-0 left-0 fixed w-full bg-primary'>
    <a href="/" className='font-black uppercase'>chatcrib</a>
    <div className='space-x-4'>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register" className="text-white bg-accent px-3 py-2 rounded-3xl"  >Register</NavLink>
    </div>
</nav>
}

export default Navbar