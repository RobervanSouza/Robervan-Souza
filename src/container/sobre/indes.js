let fundo1 = document.querySelector("#fundo");
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    fundo1.style.backgroundSize = 100 + value*2 + 'px';
})