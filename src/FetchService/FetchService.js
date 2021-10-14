import axios from "axios";

const API_BASIC_URL = "https://pixabay.com/api/";
const API_KEY = "22555284-ed5f3516253fb9f9c4ec5f32e";
const TYPE = "photo";
const ORIENTATION = "horizontal";
const PERPAGE = 12;

export const get = (words, page) => {
  return axios.get(
    `${API_BASIC_URL}?key=${API_KEY}&q=${words}&image_type=${TYPE}&page=${page}
    &orientation=${ORIENTATION}&per_page=${PERPAGE}`
  );
};

// const BASE_URL = "https://pixabay.com/api";
// const API_KEY = "22385863-ab509129ff5717a9471438652";

// export const IMAGES_PER_PAGE = 12;

// export function fetchImages (searchQuery, pageNumber) {
//   return fetch(
//     `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}
// & per_page=${ IMAGES_PER_PAGE }& key=${ API_KEY }`
//   ).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     return Promise.reject(new Error("Sorry..."));
//   });
// }
