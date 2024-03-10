document.addEventListener('DOMContentLoaded', function () {
    const dropdownItems = document.querySelector('.dropdown__items');
    const likeButton = document.querySelector('.like-button');

    likeButton.addEventListener('click', function () {
        dropdownItems.classList.toggle('open');
    });
});
