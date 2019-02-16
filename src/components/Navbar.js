import React, { Component } from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import styled from 'styled-components';

export default class NavBar extends Component{
    render()
    {
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            {/* https://www.iconfinder.com/icons/1243689/call_phone_icon*/}
            <Link to ="/">
            <img src={logo} alt="shopping" className="navbar-brand"/>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">PRODUCTS</Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
            <ButtonContainer>
                <span className="mr-2">
                <i className="fas fa-cart-plus"/></span>
                my cart
            </ButtonContainer>
            </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper= styled.nav`
background: var(--mainYellow);
.nav-link{
    color: var(--mainBlue) !important;
    font-size:1.5rem;
}
`;