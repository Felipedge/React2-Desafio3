import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link link-success" aria-current="page" href="#">Centro-Pokemón</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link-success" href="#">Pokemones</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
