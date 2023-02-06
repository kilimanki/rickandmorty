import axios from 'axios';
const listNews = document.querySelector('.episodes');
const logo = document.querySelector('.under-logo');
const btnBackDrop = document.querySelector('.btn-back');
const container = document.querySelector('.container');
const burgerbtn = document.querySelector('.open');
const burger = document.querySelector('.hiden-burger');
burgerbtn.addEventListener('click', e => {
  document.querySelector('.nav-bar').classList.toggle('not-hiden');
  document.querySelector('.nav-bar').classList.toggle('hiden-burger');
  burger.classList.toggle('hiden-burger');
  burger.classList.toggle('open-burger');
  burgerbtn.classList.toggle('open');
  burgerbtn.classList.toggle('not-open');
  if (burger.classList.contains('hiden-burger')) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
});

// async function getFetch() {
//   try {
//     const response = await axios.get('https://rickandmortyapi.com/api/episode');
//     console.log(response.data);
//     return response.data.results;
//   } catch (error) {
//     console.log(error);
//   }
// }
// getFetch();
// getFetch().then(data => createMarkup(data));

// function createMarkup(images) {
//   const markup = images
//     .map(item => {
//       console.log(item.characters[0]);
//       return `
//           <a href="${item.characters[0]}"></a>
//        <img src="${item.characters[0]}" alt="">
//       <p>${item.name}</p>`;
//     })
//     .join('');
//   listNews.insertAdjacentHTML('beforeend', markup);
// }
