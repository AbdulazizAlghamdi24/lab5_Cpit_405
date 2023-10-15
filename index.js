const addPhoto = document.getElementById('add-photo');

function createImgElement(photoURL) {
  const imgElem = document.createElement('img');
  imgElem.src = photoURL;
  return imgElem;
}

function addPhotoToGallery(imgElem) {
  const photoGalleryDiv = document.getElementById('photo-gallery');
  photoGalleryDiv.appendChild(imgElem);
}

addPhoto.addEventListener("click", () => {
  const photoUrl = prompt("Enter the URL of the photo:");
  if (photoUrl) {
    const imgElem = createImgElement(photoUrl);
    addPhotoToGallery(imgElem);
  }
});
