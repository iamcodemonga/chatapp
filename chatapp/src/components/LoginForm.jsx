import { Link } from 'react-router-dom'

function LoginForm() {
    return <section className="w-full h-screen flex justify-center items-center bg-primary">
    <form action="" className="w-80 space-y-4 px-5">
      <div><h3 className="text-2xl font-semibold text-center">Login</h3></div>
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
        <small>Don't have an account? <Link to="/register" className='font-bold underline text-secondary'>Register</Link></small>
      </div>
    </form>
  </section>
}

export default LoginForm