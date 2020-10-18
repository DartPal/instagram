import React from "react";
import logo from '../../logo.svg'
import {Link} from "react-router-dom";


class Header extends React.Component{
    render () {
        return (
            <header>
                <div className='container h-flex'>
                    <Link to='/' className='logo'>
                        <img src={logo} alt='Logo' />
                    </Link>
                    <nav className='links'>
                        <ul>
                            <li>
                                <Link to="/" className='menu__links' style={{marginRight: '20px'}}>
                                    Лента
                                </Link>
                                <Link to="/profile" className='menu__links'>
                                    Профиль
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}


export default Header;