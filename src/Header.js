import './Header_Style.css';
import Button from './Button'
import { Link } from "react-router-dom";

function Header() { 
  return (
    <>
    <header>
        <nav className="Header_Style">
            <ul className="Header_List">
            <li><Link to="/" className="Header_List_Item" >IT Solutions</Link></li>
            <li><Link to="/services" className="Header_List_Item">Service</Link></li>
            <li><Link to="/AboutUs" className="Header_List_Item">About Us</Link></li>
            <li><Button  Link = "/ContactUs" name = "Let's Talk!"/></li>
            </ul>
        </nav>
    </header>
    </>
  );
}

export default Header;