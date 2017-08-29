import React, { Component } from 'react';
import logo from './logo.png';
import './Header.css';

class Header extends Component {
    render(){
        return (
            <header>
                <div className="img-Box">
                    <img src={logo} width="100px" alt="logo"/>
                </div>
                <ul className="nav-ul">
                    <li className="nav-li">
                        <button>首页</button>
                    </li>
                    <li className="nav-li">
                        <button>服务</button>
                    </li>
                    <li className="nav-li">
                        <button>WIKI</button>
                    </li>
                    <li className="nav-li">
                        <button>联系我们</button>
                    </li>
                    <li className="nav-li">
                        <button>加入我们</button>
                    </li>
                    <li className="nav-li">
                        <button>关于</button>
                    </li>
                    <li className="nav-li">
                        <button>En</button>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;