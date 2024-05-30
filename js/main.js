let popupBg = document.querySelector('.modal');
let popupBody = document.querySelector('body');
let popup = document.querySelector('.modal');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
        popupBody.classList.add('active');

        setTimeout(function () {
            popup.style.opacity = 1;
            popupBg.style.opacity = 1;
          }, 300);
    })
});

closePopupButton.addEventListener('click',() => {
    popup.style.opacity = 0;
    popupBg.style.opacity = 0;

    popupBody.classList.remove('active');


    setTimeout(function () {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
      }, 300);
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {

        popup.style.opacity = 0;
        popupBg.style.opacity = 0;

        popupBody.classList.add('active');


        setTimeout(function () {
            popupBg.classList.remove('active');
            popup.classList.remove('active');
          }, 300);
    }
});


