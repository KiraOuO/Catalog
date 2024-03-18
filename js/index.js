document.addEventListener('DOMContentLoaded', function () {
    const dropdownItems = document.querySelector('.dropdown__items');
    const likeButton = document.querySelector('.like-button');

    likeButton.addEventListener('click', function () {
        dropdownItems.classList.toggle('open');
    });

    document.addEventListener('click', function(event) {
        const targetElement = event.target;
        if (!dropdownItems.contains(targetElement) && !likeButton.contains(targetElement)) {
            dropdownItems.classList.remove('open');
        }
    });
});

const quantityInputs = document.querySelectorAll('.quantity-count');
const increaseBtns = document.querySelectorAll('.plus');
const decreaseBtns = document.querySelectorAll('.minus');
let minimun_value = 0;

increaseBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        quantityInputs[index].stepUp();
    });
});

decreaseBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (quantityInputs[index].value > minimun_value) {
            quantityInputs[index].stepDown();
        }
    });
});




