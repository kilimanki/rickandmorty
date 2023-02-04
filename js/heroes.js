import axios from 'axios';
import Notiflix from 'notiflix';
const listNews = document.querySelector('.create-list');
const createListOfpages = document.querySelector('.make-list');
const nextBtn = document.querySelector('.btn-next');
const prewBtn = document.querySelector('.btn-prew');

let page = 1;
async function getFetch() {
  try {
    const response = await axios.get(
      ` https://rickandmortyapi.com/api/character/?page=${page}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

getFetch().then(data => createMarkup(data));

function createMarkup(images) {
  const markup = images
    .map(item => {
      return `
      <div class="hero-list">
        <img src="${item.image}" alt="logo" width="300px">
      <li class="update-list">
   
    
      <p>Name:${item.name}</p>
      <p>Status:${item.status}</p>
      <p>Species:${item.species}</p>
      <p>Location:${item.location.name}</p>
  
      </li>
      </div>`;
    })
    .join('');

  listNews.innerHTML = markup;
}
let zxc = [];
prewBtn.disabled = true;
function createPagination() {
  for (let i = 1; i < 43; i++) {
    const createPages = document.createElement('button');
    createPages.textContent = Number(`${i}`);
    createPages.classList.add('pagination-list');
    createPages.id = `${i}`;
    // const asd = createListOfpages.childElementCount;

    // zxc.push(asd);
    // if (zxc.length > 5) {
    //   createPages.classList.add('hiden');
    //   for (const child of createListOfpages.children) {
    //     if (child.id >= 40) {
    //       createPages.classList.remove('hiden');
    //     }
    //   }
    //   // for (const child of createListOfpages.children) {
    //   // console.log(child.classList.contains('current'));
    //   // if (child.classList.contains('current')) {
    //   //   console.log('gz');
    //   //   // child.nextElementSibling.classList.remove('hiden');
    //   // }
    //   // }
    //   // if (createListOfpages.childElementCount.classList.contains('current')) {
    //   //   console.log('nice');
    //   // }
    //   // items[0].classList.remove('_hide');
    //   // if (active.parentElement.previousElementSibling) {
    //   //   active.parentElement.previousElementSibling.classList.remove('_hide');
    //   // }
    //   // active.parentElement.classList.remove('_hide');
    //   // if (active.parentElement.nextElementSibling) {
    //   //   active.parentElement.nextElementSibling.classList.remove('_hide');
    //   // }
    //   // items[items.length - 1].classList.remove('_hide');
    // }
    createListOfpages.insertAdjacentElement('beforeend', createPages);

    createPages.addEventListener('click', e => {
      let total = [];
      page = Number(e.target.id);

      total.push(page);
      console.log(total[0]);

      if (
        localStorage.getItem('number') !==
        createListOfpages.childNodes.forEach(item => {
          item.id;
        })
      ) {
        createListOfpages.childNodes.forEach(item => {
          item.classList.remove('current');
        });
      }

      localStorage.setItem('number', JSON.stringify(total));
      if (
        JSON.parse(localStorage.getItem('number'))[0] === Number(e.target.id)
      ) {
        createPages.classList.add('current');
      }
      getFetch().then(data => createMarkup(data));
      if (
        JSON.parse(localStorage.getItem('somePage')) > 1 ||
        JSON.parse(localStorage.getItem('number')) > 1
      ) {
        prewBtn.disabled = false;
      }
      if (JSON.parse(localStorage.getItem('number'))[0] === 1) {
        prewBtn.disabled = true;
      }
      if (JSON.parse(localStorage.getItem('number'))[0] === 42) {
        nextBtn.disabled = true;
      } else {
        nextBtn.disabled = false;
      }
      if (JSON.parse(localStorage.getItem('number'))[0] === 42) {
        Notiflix.Notify.success('Sup bro, it was all heroes!');
      }
    });
    for (const child of createListOfpages.children) {
      if (child.id === '1') {
        child.classList.add('current');
      }
    }
  }

  prewBtn.addEventListener('click', prewPage);
}

createPagination();
nextBtn.addEventListener('click', nextPage);
function nextPage() {
  page += 1;

  localStorage.setItem('somePage', JSON.stringify(page));
  const idPage = document.getElementById(localStorage.getItem('somePage'));

  if (idPage.id === localStorage.getItem('somePage')) {
    createListOfpages.childNodes.forEach(item => {
      item.classList.remove('current');
    });
    idPage.classList.add('current');
  }
  if (JSON.parse(localStorage.getItem('somePage')) === 42) {
    nextBtn.disabled = true;
  }
  if (JSON.parse(localStorage.getItem('somePage')) > 1) {
    prewBtn.disabled = false;
  }
  if (JSON.parse(localStorage.getItem('somePage')) === 42) {
    Notiflix.Notify.success('Sup bro, it was all heroes!');
  }
  // for (const child of createListOfpages.children) {
  //   if (child.classList.contains('current') && child.id >= 5) {
  //     child.nextElementSibling.classList.remove('hiden');

  //     child.previousElementSibling.classList.add('hiden');
  //   }
  // }

  getFetch().then(data => createMarkup(data));
}
prewBtn.addEventListener('click', prewPage);
function prewPage() {
  page -= 1;

  localStorage.setItem('somePage', JSON.stringify(page));
  if (JSON.parse(localStorage.getItem('somePage')) === 1) {
    prewBtn.disabled = true;
  }
  if (JSON.parse(localStorage.getItem('somePage')) < 42) {
    nextBtn.disabled = false;
  }

  const idPrewPage = document.getElementById(localStorage.getItem('somePage'));

  if (idPrewPage.id === localStorage.getItem('somePage')) {
    createListOfpages.childNodes.forEach(item => {
      item.classList.remove('current');
    });
    idPrewPage.classList.add('current');
  }
  // for (const child of createListOfpages.children) {
  //   child.previousElementSibling.classList.remove('hiden');
  //   child.nextElementSibling.classList.remove('hiden');
  // }
  getFetch().then(data => createMarkup(data));
}

// function hideOverPages() {

// }
// hideOverPages();
