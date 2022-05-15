const btn = document.getElementById('menu-btn');
const close_btn = document.getElementById('menu-close');
const nav = document.getElementById('menu');

btn.addEventListener('click', e => {

    // changes menu button to close icon
    if (!btn.classList.contains('hidden')) {
        btn.classList.add('hidden');
        close_btn.classList.remove("hidden");
    }

    // shows the menu
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
    
})

close_btn.addEventListener('click', e => {

    // changes menu button to hamburger icon
    if (!close_btn.classList.contains('hidden')) {
        close_btn.classList.add('hidden');
        btn.classList.remove("hidden");
    }

    // shows the menu
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

