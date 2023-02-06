let btn = document.querySelector('.ham-btn');

btn.addEventListener('click', function(){
    document.querySelector('.header-nav').classList.toggle('show');
    let expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    let menu = this.nextElementSibling;
});