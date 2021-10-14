import React, { Component } from "react";
import propTypes from "prop-types";

import ImageGalleryItem from "./ImageGalleryItem";
import s from "./ImageGallery.module.css";

class ImageGallery extends Component {
  static defaultProps = { imagesArray: propTypes.array };
  static propTypes = {
    loader: propTypes.func,
    imagesArray: propTypes.array,
    modalFn: propTypes.func,
  };
  componentDidMount() {
    this.props.loader(true);
  }
  render() {
    return (
      <ul className={s.ImageGallery}>
        {this.props.imagesArray.map(
          ({ id, webformatURL, tags, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                imageLink={webformatURL}
                imagAlt={tags}
                largeImageURL={largeImageURL}
                modalFn={this.props.modalFn}
              />
            );
          }
        )}
      </ul>
    );
  }
}
export default ImageGallery;
