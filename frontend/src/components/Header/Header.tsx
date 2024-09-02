import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import SearchForm from '../SearchForm';
import HeaderCategories from '../HeaderCategories';
import HeaderCart from '../HeaderCart';
import BurguerMenu from '../BurgerMenu';
import logo from '../../assets/logo.jpeg';
import personIcon from '../../assets/person.svg';
import PersonDrawer from '../PersonDrawer';


export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="header">
      <BurguerMenu />
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
