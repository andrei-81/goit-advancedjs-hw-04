export function getPicturesHtml(picturesList) {
    var imagesHtml = []
    for (const {previewURL, largeImageURL, likes, views, comments, downloads, tags} of picturesList) {
    imagesHtml.push(
    `<div class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${previewURL}" alt="${tags}" />
            <table class="description-table">
                <tr class="description-table-row table-header">
                    <td>Likes</td>
                    <td>Views</td>
                    <td>Comments</td>
                    <td>Downloads</td>
                </tr>
                <tr class="description-table-row table-content">
                    <td>${likes}</td>
                    <td>${views}</td>
                    <td>${comments}</td>
                    <td>${downloads}</td>
                </tr>
            </table>

        </a>
    </div>`)
    }
    return imagesHtml.join(' ')
}

