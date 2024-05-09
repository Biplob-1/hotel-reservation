import { FiAlignCenter } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/rooms'}>Rooms</NavLink></li>
        <li><NavLink to={'/booking'}>My Bookings</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
        <li><NavLink to={'/about'}>About Us</NavLink></li>
        <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
    </>
    return(
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FiAlignCenter className="h-5 w-5" />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to={'/login'} className='btn'>Login</NavLink>
                </div>
            </div>
        </div>
    )
};
export default NavBar;