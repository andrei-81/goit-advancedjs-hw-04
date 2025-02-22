import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"
import { findImages, PICTURES_ON_PAGE } from "./js/pixabay-api";
import { getPicturesHtml } from "./js/render-function"


const button = document.querySelector('.search-button');
const inProgress = document.querySelector('.in-progress'); //88
const searchString = document.querySelector('.search-string')
const gallery = document.querySelector('.gallery')
const loadMoreButton = document.querySelector('.load-more')
let totalCount = 0
let pageNumber = 1
let searchStringValue = ''

var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' })

loadMoreButton.style.display = 'none'


const iziToastParameters = {
    messageSize: "16px",
    messageColor: "#FAFAFB",
    backgroundColor: "#EF4040",    
    iconUrl: "https://site-assets.fontawesome.com/releases/v6.7.2/svgs/sharp-light/octagon-xmark.svg",
    iconColor: "#FAFAFB",
    maxWidth: 432,  
    messageLineHeight: "24px",
    position: "topRight",
    
}

button.addEventListener('click', (event) => {
    event.preventDefault()
    gallery.innerHTML = ''
    setLoading()
    pageNumber = 1
    totalCount = 0
    searchStringValue = searchString.value


    findImages(searchStringValue).then((response) => {
        if (response.status != 200) {
            throw new Error(response.status);
        }
        return response
    }).then((pictures) => {
        setLoading()
        totalCount = pictures.data.total
        if(totalCount == 0){
            inProgress.innerHTML = ``
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                ...iziToastParameters, 
            })
        } else {
            const picturesList = pictures.data.hits
            const picturesHtml = getPicturesHtml(picturesList)
            gallery.innerHTML = picturesHtml
            showLoadMore()
            lightbox.refresh()
        }
    })
    .catch((error) => {iziToast.error({
        title: "Something bad happened",
        message: error,
        ...iziToastParameters,
    })
    console.log(error)
    showLoadMore()
})
    
})

function setLoading() {
    loadMoreButton.style.display = 'none'
    inProgress.innerHTML = `<span class="loader"></span>`
}

function showLoadMore() {
    inProgress.innerHTML = ``;
    loadMoreButton.style.display = 'block'
}


loadMoreButton.addEventListener('click', (event) => {
    
    event.preventDefault()
    setLoading()
    if(totalCount <= pageNumber * PICTURES_ON_PAGE) {
        iziToast.error({
            message: "We're sorry, but you've reached the end of search results.",
            ...iziToastParameters, 
        })
        inProgress.innerHTML = ``
        return
    } 
    else {
        pageNumber++

        findImages(searchStringValue, pageNumber)
        .then((response) => {
            if (response.status != 200) {
                throw new Error(response.status);
            }
            return response})
        .then((pictures) => {
            const picturesList = pictures.data.hits
            const picturesHtml = getPicturesHtml(picturesList)
            gallery.insertAdjacentHTML('beforeend', picturesHtml)
            lightbox.refresh()
            const galleryItemElement = document.querySelector('.gallery-item')
            const galleryItem = galleryItemElement.getBoundingClientRect()
            const computedStyle = window.getComputedStyle(gallery);
            const gap = parseFloat(computedStyle.gap || computedStyle.rowGap || 0)
            window.scrollBy({
                top: (galleryItem.height + gap) * 2,
                behavior: "smooth",
            })
            showLoadMore()
        })
        .catch((error) => {
            iziToast.error({
                title: "Something bad happened",
                message: error,
                ...iziToastParameters,})  
            console.log(error)
            showLoadMore()
        })

    }

})

