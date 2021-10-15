import React, { useState } from "react";
import Loader from "react-loader-spinner";
import * as API from "../src/FetchService/FetchService";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

export default function App() {
  const [searchWords, setSearchWords] = useState("");
  const [images, setImages] = useState([]);
  const [showModal, setModal] = useState(false);
  const [modalImage, setModalItem] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const toggleModal = () => {
    setModal(!showModal);
  };
  const setModalImage = (linkImg) => {
    return setModalItem(linkImg);
  };
  const openLargeImage = (linkImg) => {
    setModalImage(linkImg);
    toggleModal();
  };
  const loaderToggle = (bool) => {
    return setShowLoader(bool);
  };
  const getImages = (words, page) => {
    loaderToggle(true);
    API.get(words, page)
      .then((response) => {
        loaderToggle(false);
        const imagesFromResponse = response.data.hits;
        setImages((prevState) => [...prevState, ...imagesFromResponse]);
        setCurrentPage((prevState) => prevState + 1);
      })
      .finally(() => {
        if (currentPage > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      });
  };
  const searchFormSubmit = (event) => {
    event.preventDefault();
    setImages([]);
    const searchWordsValue = event.target[1].value;
    setSearchWords(searchWordsValue);
    const page = 1;
    getImages(searchWordsValue, page);
    event.target.reset();
  };
  const loadMoreFn = () => {
    loaderToggle(true);
    getImages(searchWords, currentPage);
  };

  return (
    <div className="App">
      {showModal && (
        <Modal closeFn={toggleModal} loader={loaderToggle}>
          <img src={modalImage} alt="modal" />
        </Modal>
      )}
      <SearchBar onSubmit={searchFormSubmit} />
      {searchWords !== "" && (
        <ImageGallery
          loader={loaderToggle}
          imagesArray={images}
          modalFn={openLargeImage}
        ></ImageGallery>
      )}
      {showLoader && <Loader />}
      {searchWords !== "" && <Button onLoadMore={loadMoreFn} />}
    </div>
  );
}
