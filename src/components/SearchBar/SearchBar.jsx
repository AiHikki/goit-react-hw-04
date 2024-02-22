import { IoSearchOutline } from 'react-icons/io5';
import toast, { Toaster } from 'react-hot-toast';
import { useRef, useId, useEffect } from 'react';
import c from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const elementId = useId();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.searchQuery.value;

    if (searchQuery.trim() === '') {
      toast('Type something to search', { duration: 2000, position: 'top-right' });
      return;
    }

    onSubmit(searchQuery);
  };

  return (
    <header className={c.header}>
      <form onSubmit={handleSubmit} className={c.form}>
        <label htmlFor={elementId + '-seachQuery'}>
          <input
            name="searchQuery"
            id={elementId + '-seachQuery'}
            ref={inputRef}
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
          />
          <button type="submit">
            <IoSearchOutline size={24} />
          </button>
        </label>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
