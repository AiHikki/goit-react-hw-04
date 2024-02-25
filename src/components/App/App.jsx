import { useState, useEffect } from 'react';
import { fetchImages } from '../../images-api';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedImageInfo, setSelectedImageInfo] = useState({});

  useEffect(() => {
    const getImages = async () => {
      try {
        setIsLoading(true);
        const { results, total_pages } = await fetchImages({ query, page });

        if (!results.length) {
          setIsEmpty(true);
          return;
        }

        setImages(prev => [...prev, ...results]);
        setIsVisible(page < total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [query, page]);

  const handleSearch = value => {
    if (value === query) return;
    setImages([]);
    setIsError(false);
    setQuery(value);
    setPage(1);
    setIsEmpty(false);
    setIsVisible(false);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = values => {
    setSelectedImageInfo(values);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImageInfo({});
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />

      {isError && (
        <ErrorMessage>Whoops, something went wrong! Please try reloading this page!</ErrorMessage>
      )}

      {images.length !== 0 && <ImageGallery images={images} openModal={openModal} />}

      {isEmpty && query && <ErrorMessage>Sorry. There are no images ... 😭</ErrorMessage>}

      {isVisible && (
        <LoadMoreBtn disabled={isLoading} onClick={handleLoadMore}>
          {isLoading ? 'Loading' : 'Load more'}
        </LoadMoreBtn>
      )}

      {isLoading && <Loader />}

      <ImageModal closeModal={closeModal} modalIsOpen={showModal} modal={selectedImageInfo} />
    </div>
  );
};

export default App;
