import axios from "axios";

export const PICTURES_ON_PAGE = 15;

const apiKey = "47925753-e7f436f37bf276331d4c00f65"
axios.defaults.baseURL = "https://pixabay.com"
export async function findImages(searchString, page=1) {
  return await axios.get('/api/', {
    params: {
        key: apiKey,
        q: searchString, // .toString().trim().replaceAll(' ', '+'),
        pretty: true,
        orientation: "horizontal",
        safesearch: true,
        image_type: "photo",
        page: page,
        per_page: PICTURES_ON_PAGE
      }
    })
}
