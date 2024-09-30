import { Link } from "react-router-dom";
import img1 from "../images/dev-logo.png";
import { IoSearch } from "react-icons/io5";

function Navigation() {


return (
    <nav className="navbarContent">
        <div className="navbar-left">
            <div className="navbar-left-logo">
                <Link>
                    <img src={img1} alt="dev-logo" />
                </Link>        
            </div>
            
            <div className="navbar-search-bar">
                <input type="text" placeholder="Search..." className="SearchDev" />
                
                <button>
                    <Link>
                        <IoSearch className="searchIcon"/>
                    </Link>
                </button>
                
            </div>            
        </div>

        <div className="navbar-right">
            <div className="navbar-right-login">
                <Link to="/login">
                    <p>Log In</p>
                </Link>   
            </div>
            <div className="navbar-right-createAccount">
                <Link to="register">
                    <p>Create account</p>
                </Link>
            </div>
        </div>
    </nav>
);
}

export default Navigation;