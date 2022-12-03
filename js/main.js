/* Один */
function scrollTo(elementOne) {
    window.scroll ({
        left: 0,
        top: elementOne.offsetTop,
        behavior: 'smooth'
    })
}
let buttonOne = document.querySelector('.works1');
let workOne = document.querySelector('#works');
buttonOne.addEventListener('click', () => {
   scrollTo(works);
});

/* Два */
function scrollTo(elementTwo) {
    window.scroll ({
        left: 0,
        top: elementTwo.offsetTop,
        behavior: 'smooth'
    })
}
let buttonTwo = document.querySelector('.works1');
let workTwo = document.querySelector('#works');
buttonTwo.addEventListener('click', () => {
   scrollTo(works);
});

/* Три */

function scrollTo(elementTwo) {
    window.scroll ({
        left: 0,
        top: elementTwo.offsetTop,
        behavior: 'smooth'
    })
}

let buttonThree = document.querySelector('.shop1');
let shopTwo = document.querySelector('#shop');
buttonThree.addEventListener('click', () => {
   scrollTo(shop);
});

/* Четыре */
function scrollTo(elementFour) {
    window.scroll ({
        left: 0,
        top: elementFour.offsetTop,
        behavior: 'smooth'
    })
}

let buttonFour = document.querySelector('.contacts1');
let shopFour = document.querySelector('#contacts');
buttonFour.addEventListener('click', () => {
   scrollTo(contacts);
});


// Меню бургер

const iconMenu = document.querySelector('.menu__icon');
if(iconMenu){
    const menuBody = document.querySelector('.menu__body')
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


AOS.init();
