let img = document.querySelector('.image img');
let container = document.querySelector('.container');

function handleClick(phone, color) {
    phones(phone);
    colors(color);
}

function phones(phone) {
    img.src = phone;
}


function colors(color) {
    container.style.background = color;
}
