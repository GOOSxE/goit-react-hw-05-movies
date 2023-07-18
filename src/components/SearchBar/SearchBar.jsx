import React, { useState } from 'react';
import propTypes from 'prop-types';
import css from './SearchBar.module.css';

const SearchBar = ({ onFormSubmit }) => {
  const [value, setValue] = useState('');
  const handleFormSubmit = event => {
    event.preventDefault();
    onFormSubmit(value);
    setValue('');
  };
  const handleInputChange = event => {
    setValue(event.target.value.trim());
  };
  return (
    <form className={css.search_form} onSubmit={handleFormSubmit}>
      <input
        className={css.input}
        onChange={handleInputChange}
        value={value}
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search films..."
        required
        minLength={1}
      />
      <button className={css.button} type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};
SearchBar.propTypes = {
  onFormSubmit: propTypes.func.isRequired,
};
export default SearchBar;
