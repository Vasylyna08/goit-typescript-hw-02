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
import { Image, ImageData } from './App.types';
import { string } from 'yup';

function App() {
  const [images, setImages] = useState<Image[] | null>(null);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!query.trim()) return;

    async function fetchImages() {
      try {
        setIsLoading(true);
        const data: ImageData = await requestImages(query, page);
        if (!data || data.total === 0) {
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

  const onSetSearchQuery = (searchTerm: string) => {
    setQuery(searchTerm);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = (photo: Image) => {
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
