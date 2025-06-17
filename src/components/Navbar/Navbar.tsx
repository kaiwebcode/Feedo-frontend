import { Close, Menu } from '@mui/icons-material'
import React from 'react'
import { NavbarMenu } from './data'
import ResponsiveMenu from './ResponsiveMenu'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
   const navigate = useNavigate();

  return (
    <>
      <nav className="w-full z-50 bg-black/30 backdrop-blur-md border-b border-slate-700 sticky top-0">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" >
          <div className="flex items-center gap-2 text-2xl font-bold uppercase tracking-wider">
            <img src="/feedo_logo.png" alt="logo" className="h-10 w-10 rounded-md" />
            <p className="text-white">Fee<span className="text-sky-400">D</span>o</p>
          </div>
          </Link>

          {/* Menu Section */}
          <ul className="hidden md:flex items-center gap-6 text-white font-medium">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="hover:text-sky-400 transition-colors duration-200"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Login Button */}
          <div className="hidden md:block">
            <button className="px-3 py-2 border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black font-semibold rounded-md transition-all duration-200"
            onClick={() => navigate("/signup")}>
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden text-white" onClick={() => setOpen(!open)}>
             {open ? (
              <Close className="text-4xl cursor-pointer" />
            ) : (
              <Menu className="text-4xl cursor-pointer" />
            )}
          </div>
        </div>

      </nav>
      {/* Responsive Mobile Menu */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
