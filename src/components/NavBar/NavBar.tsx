import React from 'react'
import { useState } from 'react';
import { Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import './NavBar.css';

function NavBar() {
const [click, setClick] = useState(false);
const [button, setButton] = useState(true);
const clickInput = () => setClick(!click);
  return (
    <>
    <div>
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="nav-menu">
                <div className="nav-side-menu">
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1 }}
                >
                <MenuIcon />
                </IconButton>
                </div> 
                    <li className='nav-buttons'>
                    <Link href="#" color="white" underline="hover">
                    {'Home'}
                    </Link>
                    </li>
                    <li className='nav-buttons'>
                    <Link href="#" color="white" underline="hover">
                    {'Tournaments'}
                    </Link>
                    </li>
                    <li className='nav-buttons'>
                    <Link href="#" color="white" underline="hover">
                    {'Friends'}
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    </>
  );
}

export default NavBar