import { useEffect } from "react";
import propTypes from "prop-types";

import ImageGalleryItem from "./ImageGalleryItem";
import s from "./ImageGallery.module.css";

export default function ImageGallery({ loader, imagesArray, modalFn }) {
  useEffect(() => {
    if (loader !== true) {
      return;
    }
  });
  return (
    <ul className={s.ImageGallery}>
      {imagesArray.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            imageLink={webformatURL}
            imagAlt={tags}
            largeImageURL={largeImageURL}
            modalFn={modalFn}
          />
        );
      })}
    </ul>
  );
}

ImageGallery.defaultProps = { imagesArray: propTypes.array };

ImageGallery.propTypes = {
  loader: propTypes.func,
  imagesArray: propTypes.array,
  modalFn: propTypes.func,
};
