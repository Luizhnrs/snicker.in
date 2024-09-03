import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import SearchForm from '../SearchForm';
import HeaderCategories from '../HeaderCategories';
import HeaderCart from '../HeaderCart';
import logo from '../../assets/logo.jpeg';
import personIcon from '../../assets/person.svg';
import PersonDrawer from '../PersonDrawer';
import burgerIcon from '../../assets/burgerMenu.svg';
import MobileDrawer from '../MobileDrawer';


export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleMobileDrawer = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <header className="header">
      <button className="burger-icon" onClick={toggleMobileDrawer}>
        <img src={burgerIcon} alt="Burger icon" />
      </button>
      <MobileDrawer isOpen={mobileDrawerOpen} onClose={toggleMobileDrawer} />
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <HeaderCategories />
      <div className="header-utils">
        <SearchForm />
        <HeaderCart />
        <button className="person-icon" onClick={toggleDrawer}>
          <img
            src={personIcon}
            alt="Person icon"
          />
        </button>
        <PersonDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
      </div>
    </header>
  );
}
