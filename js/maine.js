'use strict'

{
    const images = [
        'img/pic00.png',
        'img/pic01.png',
        'img/pic02.png',
        'img/pic03.png',
        'img/pic04.png',
        'img/pic05.png',
        'img/pic06.png',
        'img/pic07.png',
    ];

    let currentIndex = 0;
    const mainImage = document.getElementById('main');
    // ↑表示する領域
    mainImage.src = images[currentIndex];
}