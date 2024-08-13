import './App.css';
import { Toaster } from 'react-hot-toast';

import { useEffect, useState } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

import { requestImages } from './components/services/api';

function App() {
  const [images, setImages] = useState(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (query === null) return;

    async function fetchImages() {
      try {
        setIsLoading(true);
        const data = await requestImages(query, page);
        if (data.total === 0) {
          return;
        }

        if (data.total_pages > page) {
          setLoadMore(true);
        }
        setImages(prevImages =>
          prevImages ? [...prevImages, ...data.results] : data.results
        );
        setTotalPages(data.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  const onSetSearchQuery = searchTerm => {
    setQuery(searchTerm);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = photo => {
    setSelectedImage(photo);
    onOpenModal();
  };

  const onOpenModal = () => {
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={onSetSearchQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {page < totalPages && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      <ImageModal
        photo={selectedImage}
        isModalOpen={isModalOpen}
        closeModal={onCloseModal}
      />
      <Toaster
        toastOptions={{
          style: {
            background: '#025523',
            color: '#fff',
          },
        }}
      />
    </div>
  );
}

export default App;
