const smallPhotos = document.querySelectorAll(".info-small");
const largePhoto = document.querySelector("info__img-large");

const openPhoto = photos => {
    photos.classList.add("");
};

const removeClass = elements => {
    if(typeof elements === "object") {
        elements.forEach(element => {
            element.classList.remove("");
        })
    }
    elements.classList.remove("");
}

const changeMainPhoto = (photo) => {
    const currentPhoto = document.querySelector('.info__img-large');
    if(currentPhoto.src === photo.src) return;
    currentPhoto.setAttribute("src", photo.src);    
}

smallPhotos.forEach(photo => {
    photo.addEventListener('click', () => changeMainPhoto(photo));
});
