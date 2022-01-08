import { useEffect, useRef, useState } from "react"
import { Link, NavLink } from "react-router-dom";

const Layout = ({ children }) => {

    const [navOpen, setNavOpen] = useState(false);
    const [isMobileHeight, setIsMobileHeight] = useState(false);
    const headerHeight = useRef(null);
    const [stickNav, setStickNav] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 991) {
                setIsMobileHeight(false);
            } else {
                setIsMobileHeight(true);
            }
        });

        if (window.innerWidth > 991) {
            setIsMobileHeight(false);
        } else {
            setIsMobileHeight(true);
        }

        window.addEventListener('scroll', () => {
            if (window.scrollY >= headerHeight.current.offsetHeight) {
                setStickNav(true)
            } else {
                setStickNav(false)
            }
        })

    }, [headerHeight])

    return (
        <div>
            <header ref={headerHeight}>
                <div className="bg-gray-200 py-3">
                    <div className="container mx-auto">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <i className="bi bi-geo-alt-fill mr-2 text-xs"></i>
                                    <address className="text-xs hidden lg:block">28 Jackson Street, Chicago, 7788569 USA</address>
                                </div>
                                <div className="flex items-center ml-2 lg:ml-10">
                                    <i className="bi bi-envelope mr-2 text-xs"></i>
                                    <a href="mailto:info@dental.com" className="text-xs hidden lg:block">info@dental.com</a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <a href="https://google.com" className="mx-1">
                                    <i className="bi bi-google text-sm"></i>
                                </a>
                                <a href="https://twitter.com" className="mx-1">
                                    <i className="bi bi-twitter text-sm"></i>
                                </a>
                                <a href="https://google.com" className="mx-1">
                                    <i className="bi bi-linkedin text-sm"></i>
                                </a>
                                <a href="https://google.com" className="mx-1">
                                    <i className="bi bi-instagram text-sm"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className={`py-5 bg-white ${stickNav ? 'fixed left-0 right-0 top-0 w-full z-20 ' : ''}  normal-transition`}>
                    <div className="container mx-auto">
                        <div className="flex justify-between items-center">
                            <NavLink to="/">
                                <img src="/images/logo.webp" alt="logo" />
                            </NavLink>
                            <button onClick={() => setNavOpen(!navOpen)} className="flex justify-end items-start lg:hidden">
                                {navOpen ? <i className="bi bi-x-lg text-3xl normal-transition"></i> : <i className="bi bi-list text-3xl normal-transition"></i>}
                            </button>

                            <ul className={isMobileHeight ? `${isMobileHeight && navOpen ?
                                'list-none flex flex-col absolute top-0 left-0 bottom-0 right-1/3 w-4/5 backdrop-blur-lg z-10 py-8 bg-white opacity-100 shadow-lg h-full animate__animated animate__slideInLeft' :
                                'animate__animated animate__slideInRight hidden'}` :
                                'list-none flex lg:flex-row'}>
                                <li className="mx-4 my-2 lg:my-0">
                                    <NavLink to='/' className={({ isActive }) => isActive ? "font-bold text-blue-400" : "font-bold hover:text-blue-400 normal-transition"}>
                                        Home
                                    </NavLink>
                                </li>
                                <li className="mx-4 my-2 lg:my-0">
                                    <NavLink to='/about' className={({ isActive }) => isActive ? "font-bold text-blue-400" : "font-bold hover:text-blue-400 normal-transition"}>
                                        About
                                    </NavLink>
                                </li>
                                <li className="mx-4 my-2 lg:my-0">
                                    <NavLink to='/service' className={({ isActive }) => isActive ? "font-bold text-blue-400" : "font-bold hover:text-blue-400 normal-transition"}>
                                        Service
                                    </NavLink>
                                </li>
                                <li className="mx-4 my-2 lg:my-0">
                                    <NavLink to='/pricing' className={({ isActive }) => isActive ? "font-bold text-blue-400" : "font-bold hover:text-blue-400 normal-transition"}>
                                        Pricing
                                    </NavLink>
                                </li>
                                <li className="mx-4 my-2 lg:my-0">
                                    <NavLink to='/contact' className={({ isActive }) => isActive ? "font-bold text-blue-400" : "font-bold hover:text-blue-400 normal-transition"}>
                                        Contact
                                    </NavLink>
                                </li>
                                <li className="mx-4 my-2 lg:my-0">
                                    <NavLink to='/contact' className={({ isActive }) => isActive ? "font-bold text-blue-400" : "font-bold hover:text-blue-400 hover:bg-white border hover:border-blue-500 normal-transition bg-blue-400 px-6 py-3 text-white"}>
                                        Book Now
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            {children}
            <footer className="bg-fixed bg-cover" style={{ background: 'linear-gradient(rgba(54,134,255,.7), rgba(0,0,0,.7)),url("/images/footer-bg.webp") no-repeat', backgroundAttachment: 'fixed' }}>
                <div className="container mx-auto pt-24 pb-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        <div>
                            <img src="/images/logo.webp" alt="logo" />
                            <p className="mt-4 text-sm text-white">
                                Etiam sutor risus, dapibus act elefend katen, lacinia sitamet denim. Mauris sagittis kansa interdum dignissim.
                            </p>
                            <p className="text-xs my-3 text-white">
                                <i class="bi bi-geo-alt-fill text-blue-400 mr-2"></i>
                                28 Jackson Street, Chicago, 7788569 USA
                            </p>
                            <p className="text-xs my-3 text-white">
                                <i class="bi bi-telephone-fill text-blue-400 mr-2"></i>
                                +84. 2252. 2250. 122
                            </p>
                            <p className="text-xs my-3 text-white">
                                <i class="bi bi-envelope-fill text-blue-400 mr-2"></i>
                                info.dento@mail.com
                            </p>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">Opening Hours</h1>
                            <table className="border-0 text-white w-full mt-4">
                                <tr>
                                    <td className="py-1.5">Mon-Wed</td>
                                    <td className="py-1.5">8.00-18.00</td>
                                </tr>
                                <tr>
                                    <td className="py-1.5">Thu-Fri</td>
                                    <td className="py-1.5">8.00-17.00</td>
                                </tr>
                                <tr>
                                    <td className="py-1.5">Sat</td>
                                    <td className="py-1.5">9.00-17.00</td>
                                </tr>
                                <tr>
                                    <td className="py-1.5">Sun</td>
                                    <td className="py-1.5">9.00-17.00</td>
                                </tr>
                                <tr>
                                    <td className="py-1.5">Holiday</td>
                                    <td className="py-1.5">Closed</td>
                                </tr>
                            </table>
                        </div>

                        <div>
                            <h1 className="text-xl font-bold text-white">Quick Links</h1>
                            <ul className="list-none mt-4">
                                <li className="my-2">
                                    <Link to="/about" className="text-base text-white hover:text-blue-400 normal-transition">
                                        About
                                    </Link>
                                </li>
                                <li className="my-2">
                                    <Link to="/news" className="text-base text-white hover:text-blue-400 normal-transition">
                                        News
                                    </Link>
                                </li>
                                <li className="my-2">
                                    <Link to="/services" className="text-base text-white hover:text-blue-400 normal-transition">
                                        Services
                                    </Link>
                                </li>
                                <li className="my-2">
                                    <Link to="/pricing" className="text-base text-white hover:text-blue-400 normal-transition">
                                        Pricing
                                    </Link>
                                </li>
                                <li className="my-2">
                                    <Link to="/contact" className="text-base text-white hover:text-blue-400 normal-transition">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-xl font-bold text-white">Quick Links</h1>
                            <p className="mt-4 text-sm text-white">
                                We will send out weekly newest article and some great offers
                            </p>
                            <div className="flex w-full mt-4">
                                <input type="email" className="focus:outline-none w-full h-full py-3.5 pl-4" placeholder="Email" />
                                <button className="bg-blue-400 text-white py-3 px-5 hover:bg-black normal-transition">
                                    <i class="bi bi-send-fill"></i>
                                </button>
                            </div>
                            <div className="flex items-center mt-4">
                                <a href="/">
                                    <i class="bi bi-facebook mr-3 text-white hover:text-blue-400 normal-transition"></i>
                                </a>
                                <a href="/">
                                    <i class="bi bi-twitter mr-3 text-white hover:text-blue-400 normal-transition"></i>
                                </a>
                                <a href="/">
                                    <i class="bi bi-google mr-3 text-white hover:text-blue-400 normal-transition"></i>
                                </a>
                                <a href="/">
                                    <i class="bi bi-linkedin mr-3 text-white hover:text-blue-400 normal-transition"></i>
                                </a>
                                <a href="/">
                                    <i class="bi bi-pinterest mr-3 text-white hover:text-blue-400 normal-transition"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-24">
                        <div className="h-px bg-gray-400 w-full" />
                        <p className="text-center text-gray-200 text-xs mt-3">Copyright ©{new Date().getFullYear()} All rights reserved </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout;