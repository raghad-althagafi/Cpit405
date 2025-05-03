import './Button_Style.css';
import { Link } from "react-router-dom";
function Button(props) { 
    return (
        <>
        <Link to={props.Link} className="Button" style={props.style}> {props.name}</Link> 
        </>
    );
  }
  export default Button;