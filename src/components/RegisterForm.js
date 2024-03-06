import { Link } from 'react-router-dom'
import '../index.css'

function RegisterForm() {
    return <section className="w-full h-screen flex justify-center items-center bg-primary registerSectin">
    <form action="" className="w-80 space-y-4 px-5">
      <div><h3 className="text-2xl font-semibold text-center">Register</h3></div>
      <div className="flex flex-col">
        <label htmlFor="nickname">Nickname</label>
        <input type="text" name="" id="nickname" placeholder="e.g grimmeyflex" className="bg-gray-100 p-2 rounded-lg mt-1 border-2 border-gray-500 bg-transparent focus-within:border-gray-900 outline-none"  />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input type="email" name="" id="email" placeholder="e.g grimmeyflex@gmail.com" className="bg-gray-100 p-2 rounded-lg mt-1 border-2 border-gray-500 bg-transparent" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input type="password" name="" id="password" placeholder="e.g XXXXXXXXX" className="bg-gray-100 p-2 rounded-lg mt-1 border-2 border-gray-500 bg-transparent" />
      </div>
      <div>
        <button type="submit" className="bg-accent text-white py-3 w-full mt-3 rounded-lg mb-2">submit</button>
        <small>Already have an account? <Link to="/login" className='font-bold underline text-secondary'>login</Link></small>
      </div>
    </form>
  </section>
}

export default RegisterForm