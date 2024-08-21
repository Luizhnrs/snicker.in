import React, {MouseEvent, useState} from 'react';
import searchIcon from '../../assets/search.svg';
import './searchForm.css';

export default function SearchForm() {
  const [search, setSearch] = useState('');

  const searchProducts = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
  };

  return (
    <form className="search-form">
      <button className="search-button" onClick={searchProducts}>
        <img src={searchIcon} alt="Search Icon" className="search-icon" />
      </button>
      <input
        type="text"
        name="search"
        value={search}
        onChange={({target}) => setSearch(target.value)}
        placeholder="Buscar"
        className="search-input"
        autoComplete="false"
      />
    </form>
  );
}
