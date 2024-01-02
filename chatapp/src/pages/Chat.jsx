import { Link } from 'react-router-dom'

export default function Chat() {

    return <>
        <section className="flex h-screen bg-primary">
            <aside className="h-full w-1/3 px-3 border-r-2 border-gray-400">
                <nav className="py-5 flex items-center justify-between">
                    <h3 className="font-extrabold text-2xl">Inbox</h3>
                    <button type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                </nav>
                <section className="mt-3 space-y-5">
                    <Link className="card flex items-center justify-between" to="/">
                        <div className="first-flex flex items-center space-x-3">
                            <div className="img-container h-12 w-12">
                                <img src="https://images.pexels.com/photos/11352035/pexels-photo-11352035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile_picture" className="w-full h-full object-cover rounded-full" />
                            </div>
                            <div className="details-container">
                                <h4 className="font-bold">Hakistudios - <span>13:00pm</span></h4>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur..</p>
                            </div>
                        </div>
                        <div className="notification-container">
                            <span className="text-xs py-1 px-2 bg-green-600 rounded-full font-bold">3</span>
                        </div>
                    </Link>
                </section>
            </aside>
            <main className="h-full w-full px-3 relative">
                <nav className='py-5 flex items-center justify-between absolute top-0 left-0 px-3 border-b-2 border-gray-400 w-full bg-primary'>
                    <div className='flex items-center'>
                        <button className='back-arrow px-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <div className="img-container h-8 w-8">
                            <img src="https://images.pexels.com/photos/11352035/pexels-photo-11352035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile_picture" className="w-full h-full object-cover rounded-full" />
                        </div>
                    </div>
                    <button className='settings-icon-container' type='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                        </svg>
                    </button>
                </nav>
                <main className="chatbox py-20 overflow-y-auto h-full space-y-5">
                    <div className='sender flex justify-end'>
                        <div className=''>
                            <p className='text-primary w-96 bg-accent px-4 py-3 rounded-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic aspernatur eligendi sint ea velit. Ipsam libero neque debitis fugit?</p>
                            <p className='text-xs text-gray-400 mt-1'>Me - 23:02 pm</p>
                        </div>
                    </div>
                    <div className='receiver'>
                        <div className=''>
                            <p className='text-primary w-96 bg-secondary px-4 py-3 rounded-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic aspernatur eligendi sint ea velit. Ipsam libero neque debitis fugit?</p>
                            <p className='text-xs text-gray-400 mt-1'>Grimmey - 23:05 pm</p>
                        </div>
                    </div>
                    <div className='receiver'>
                        <div className=''>
                            <p className='text-primary w-96 bg-secondary px-4 py-3 rounded-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic aspernatur eligendi sint ea velit. Ipsam libero neque debitis fugit?</p>
                            <p className='text-xs text-gray-400 mt-1'>Grimmey - 23:05 pm</p>
                        </div>
                    </div>
                    <div className='sender flex justify-end'>
                        <div className=''>
                            <p className='text-primary w-96 bg-accent px-4 py-3 rounded-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic aspernatur eligendi sint ea velit. Ipsam libero neque debitis fugit?</p>
                            <p className='text-xs text-gray-400 mt-1'>Me - 23:02 pm</p>
                        </div>
                    </div>
                    <div className='receiver'>
                        <div className=''>
                            <p className='text-primary w-96 bg-secondary px-4 py-3 rounded-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic aspernatur eligendi sint ea velit. Ipsam libero neque debitis fugit?</p>
                            <p className='text-xs text-gray-400 mt-1'>Grimmey - 23:05 pm</p>
                        </div>
                    </div>
                </main>
                <footer className='py-2 border-t-2 border-gray-400 absolute bottom-0 left-0 w-full px-3 bg-primary'>
                    <form action="" className='w-full flex space-x-5'>
                        <input type="text" name="" id="" placeholder='type a message...' className='w-full py-2 px-3 outline-none bg-transparent' />
                        <button type="submit" className='px-5 py-2 bg-accent text-primary rounded-xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </button>
                    </form>
                </footer>
            </main>
        </section>
    </>
}