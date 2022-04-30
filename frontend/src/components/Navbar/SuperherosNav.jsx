import React, {useState} from 'react';
import {Link } from "react-router-dom";
import './navbar.css'

const SuperherosNav = () => {
    const [add, setAdd] = useState(true)
    return (
        <div className="nav">
            <div className="logo">Superheros</div>
            <Link className="add-icon" to="/" onClick={() => setAdd(!add)}>
                <img src="./img/home.svg"
                     alt="Home"
                />
            </Link>
        </div>
    );
};

export default SuperherosNav;