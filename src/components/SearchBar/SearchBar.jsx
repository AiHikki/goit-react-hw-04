import { IoSearchOutline } from 'react-icons/io5';
import toast, { Toaster } from 'react-hot-toast';
import c from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.searchQuery.value;

    if (!searchQuery.trim()) {
      toast('Type something to search', { duration: 2000, position: 'top-right' });
      return;
    }

    onSubmit(searchQuery);
  };

  return (
    <header className={c.header}>
      <form onSubmit={handleSubmit} className={c.form}>
        <div className={c.searchBox}>
          <button type="submit">
            <IoSearchOutline size={24} />
          </button>
          <label>
            <input
              name="searchQuery"
              type="text"
              autoFocus
              autoComplete="off"
              placeholder="Search images and photos"
            />
          </label>
        </div>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
