import './Header_Style.css';

function Header() { 
  return (
    <>
    <header className="Header_Image">
        <nav className="Header_Style">
            <ul className="Header_List">
            <li><a className="Header_List_Item"  href='#'>IT Solutions</a></li>
            <li><a className="Header_List_Item" href='#'>Service</a></li>
            <li><a className="Header_List_Item" href='#'>About Us</a></li>
            <li><a className="Header_List_Item , LetsTalkButton" href='#'>Let's Talk!</a></li>
            </ul>
        </nav>
        <h1 className="Banner">
        Discover <br/>
        real-world <br/>
        IT Solutions <br/>
      </h1>
    </header>
    </>
  );
}

export default Header;