import { FaBars } from 'react-icons/fa'
import { useState } from 'react';
import logo from '../assets/images/apple-touch-icon.png'

const Navbar = () => {
    const [toggle,setToggle] = useState(false)
    return (
        <header className="container-fluid">
        <nav id="nav"  className="flex font-poppins">
    
            <div className="nav-brand">
                <a href="#" className="text-dark text-lg font-bold">
                  <img src={logo} alt="LOGO" className='logo'/>
                </a>
            </div>
    
            <div className="toggle-btn ">
                <button className="btn">
                    <FaBars onClick={()=> setToggle(!toggle)}/>
                </button>
            </div>
    
            <div className={toggle ? 'collapse flex-grow active' : 'collapse flex-grow'}>
                <ul className="flex">
                    <li>
                        <a href="#" className="link">About</a>
                    </li>
                    <li>
                        <a href="#" className="link">Products</a>
                    </li>
                    <li>
                        <a href="#" className="link">Blogs</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
        );
}

export default Navbar
