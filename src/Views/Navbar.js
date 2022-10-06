import React from 'react';
import icono from '../Img/Pokemon.png';
import "bootstrap/dist/css/bootstrap.min.css";
import './navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={icono} alt="Logo" width="70"class="d-inline-block align-text-top"/>
                </a>

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
