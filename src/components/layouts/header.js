import React from 'react';
import '../../css/header.scss';
import {Link} from 'react-router-dom';

export class HeaderComponent extends React.Component {
    render() {
        return (
            <nav className="custom-nav">
               <div className="container custom-nav-container d-flex justify-content-between align-items-center">
                    <Link to="/" className="nav-brand">
                        <i className="fa fa-home mr-2"></i>
                        HomePage
                    </Link>
                    <ul className="nav-list-item-wrapper d-flex">
                        <li><Link to="/contact/add" className="link-item">Add</Link></li>
                        <li><Link to="/about" className="link-item">About</Link></li>
                    </ul>
               </div>
            </nav>
        )
    }
}