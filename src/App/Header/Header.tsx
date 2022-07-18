import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import './Header.scss';
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    let displayDropDown = false;

    const toggleDropdown = () => {
        displayDropDown = !displayDropDown;
    }

    return (
        <header className="header">
            {/*
                Need to create a logo to keep at the top of my navigation bar.
            */}
            {/* <img /> */}
            <div className="navbar-icon">
                <button className="hamburger" onClick={() => toggleDropdown()}><FontAwesomeIcon icon={ faHamburger } /></button>
            </div>
            <div className={`navbar-icon ${displayDropDown ? 'show' : 'hide'}`}>
                <div className="dropdown">
                    <Link className="list-item" to='/'>HOME</Link>
                    <Link className="list-item" to='/about'>ABOUT</Link>
                    <Link className="list-item" to='/skills'>SKILLS</Link>
                    <Link className="list-item" to='/myWork'>MY WORK</Link>
                    <Link className="list-item" to='/contact'>CONTACT</Link>
                </div>
            </div>
            <div className="bottom-icons">
                <a href="https://github.com/Dominik-Rodriguez">
                    <FontAwesomeIcon icon={ faGithub } />
                    <FontAwesomeIcon icon={ faLinkedin } />
                    <FontAwesomeIcon icon={ faInstagram } />
                </a>
            </div>
        </header>
    )
}

export default Header;