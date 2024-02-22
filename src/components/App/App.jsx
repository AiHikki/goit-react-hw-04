import './App.css';
import { useState, useEffect } from 'react';
import { useCount } from '../../hooks/useCount';
import { fetchImages } from '../../images-api';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

const per_page = 12;

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useCount(1);

  useEffect(() => {
    const getImages = async () => {
      try {
        setLoading(true);
        setIsError(false);
        const data = await fetchImages({ query, page, per_page });
        setImages(prev => [...prev, ...data]);
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };
    getImages();
  }, [query, page]);

  const handleSearch = searchQuery => {
    setImages([]);
    setQuery(searchQuery);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {!isError && images?.length > 0 && <ImageGallery images={images} />}
      {isError && (
        <ErrorMessage>Whoops, something went wrong! Please try reloading this page!</ErrorMessage>
      )}
      {!isError && !loading && images?.length > 0 && <LoadMoreBtn onClick={setPage} />}
      {loading && <Loader />}
    </div>
  );
};

export default App;
