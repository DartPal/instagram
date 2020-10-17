import React from "react";
import logo from '../../logo.svg'


class Header extends React.Component{
    render () {
        return (
            <header>
                <div className='container h-flex'>
                    <a href="/" className='logo'>
                        <img src={logo} alt='Logo' />
                    </a>
                    <nav className='links'>
                        <ul>
                            <li>
                                <a href="/" className='menu__links' style={{marginRight: '20px'}}>
                                    Лента
                                </a>
                                <a href="/" className='menu__links'>
                                    Профиль
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}


export default Header;