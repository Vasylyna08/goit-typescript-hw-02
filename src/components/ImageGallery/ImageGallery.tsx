import ImageCard from '../ImageCard/ImageCard';
import { Image } from '../../App.types';
import css from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={css.list}>
      {Array.isArray(images) &&
        images.map(image => {
          return (
            <li className={css.item} key={image.id}>
              <ImageCard onImageClick={onImageClick} image={image} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
