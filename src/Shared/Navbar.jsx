import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>
       <NavLink className="bg-[rgba(176,184,186,.5)] rounded-2xl"  to="/"> <li><a>Home</a></li></NavLink>
       <NavLink className="bg-[rgba(176,184,186,.5)] rounded-2xl" to="/addproduct"> <li><a>Add Product</a></li></NavLink>
       <NavLink className="bg-[rgba(176,184,186,.5)] rounded-2xl" to="/mycart"> <li><a>My Cart</a></li></NavLink>
       
       
       
    </>

    return (
        <div className="navbar z-10 text-white fixed">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       {navLinks}
                    </ul>
                </div>
                <a className="btn btn-outline border-white text-white text-xl">Rahat Tech</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-7">
                  {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login"> <button className="btn btn-outline btn-warning">Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;