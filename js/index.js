
const sharePopup = document.querySelector('.share-popup')

sharePopup.addEventListener('click', () => {
    const popup = document.getElementById('popup-content')
    popup.classList.toggle('show')
})
