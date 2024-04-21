import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

import('../public/data/DATA.json').then(({
    default: dataResto
}) => {
    console.log('Data restoran :', dataResto)
    let datas = dataResto['restaurants']
    let listResto = '';
    datas.forEach(function (data) {
        listResto += `
        <div class="list_resto">
            <img class="list_resto_logo" src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}">
            <div class="city"><span class="material-symbols-outlined">
            location_on
            </span>${data['city']}</div>
            <div class="list_resto_content">
                <h1 class="list_resto_title"><a href="#">${data['name']}</a></h1>
                <p class="list_resto_rating">
                <span class="material-symbols-outlined">star</span>
                <a href="#" class="list_resto_rating_value">${data['rating']}</a>
                </p>
                
                <div class="list_resto_decription">${data['description']}</div>
            </div>
        
        </div>
        `;
    });
    document.querySelector('#resto').innerHTML = listResto;
});

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (ev) {
    drawer.classList.toggle('open');
    ev.stopPropagation();
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});