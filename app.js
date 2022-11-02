const list = document.querySelectorAll('.list');
let display_text = document.querySelector('.active-link-text');

function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active')
    );
    this.classList.add('active');
    display_text.innerText = this.innerText;
}

list.forEach((item) => item.addEventListener('click', activeLink));