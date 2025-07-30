const footer = document.querySelector('footer');

const button = document.getElementById('shareButton');

const avatar = document.querySelector('.avatar');

const shareMenu = document.querySelector('.share-menu');

button.addEventListener('click', () => {

    const isDesktop = window.matchMedia('(min-width: 576px)').matches;

    if (isDesktop) {
        footer.classList.toggle('active');
        shareMenu.classList.toggle('hidden');
    } 
    else {   
        avatar.classList.toggle('hidden');
        shareMenu.classList.toggle('hidden');
        footer.classList.toggle('active');
    }
});


