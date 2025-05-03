import './Footer_Style.css';
function Footer() { 
  return (
    <>
    <header className="FooterContainer">
            <ul className="Header_List">
            <li><a className="Header_List_Item" href='/services'>Service</a></li>
            <li><a className="Header_List_Item" href='/AboutUs'>About Us</a></li>
            <li><a className="Header_List_Item" href='/ContactUs'>Let's Talk!</a></li>
            </ul>
      <h1>
        IT <br/>Solutions <br/>
      </h1>
    </header>
    </>
  );
}

export default Footer;