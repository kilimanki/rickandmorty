import axios from 'axios';
import Notiflix from 'notiflix';
const listNews = document.querySelector('.create-list');
const createListOfpages = document.querySelector('.make-list');
const nextBtn = document.querySelector('.btn-next');
const prewBtn = document.querySelector('.btn-prew');
const burgerbtn = document.querySelector('.open');
const burger = document.querySelector('.hiden-burger');
burgerbtn.addEventListener('click', makeBurger);
function makeBurger() {
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
}

const summ = 0;
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
  const difference = Math.ceil(826 / 20) + 1;
  console.log(difference);
  for (let i = 1; i < difference; i++) {
    const createPages = document.createElement('button');
    createPages.textContent = Number(`${i}`);
    createPages.classList.add('pagination-list');
    createPages.id = `${i}`;

    createListOfpages.insertAdjacentElement('beforeend', createPages);
    const childPagination = document.querySelectorAll('.pagination-list');
    for (const child of createListOfpages.children) {
      if (child.id === '1') {
        child.classList.add('current');
      }
      if (child.id === '2') {
        child.classList.add('for-space');
      }
    }
    if (createListOfpages.childElementCount > 5) {
      childPagination.forEach(item => {
        if (item.id >= 3) {
          item.classList.add('hiden');
        }
        if (Number(item.id) === 42) {
          item.classList.remove('hiden');
        }
      });
    }

    createPages.addEventListener('click', e => {
      let total = [];
      page = Number(e.target.id);

      total.push(page);
      childPagination.forEach(item => {
        if (Number(item.id) === 42) {
          return;
        }
        if (Number(item.id) >= 2) {
          item.nextElementSibling.classList.remove('hiden');
        }
        if (item.id >= 4) {
          item.nextElementSibling.classList.remove('hiden');
          item.previousElementSibling.classList.add('hiden');
        }

        // if (
        //   Number(item.id) !== Number(item.nextElementSibling.id + 1) &&
        //   item.className.includes('hiden') === false
        // ) {
        //   console.log('trouble');
        // }
      });

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
      if (createListOfpages.getElementsByClassName('hiden').length <= 38) {
        createListOfpages.lastElementChild.classList.add('for-space-second');
      }
    });
  }

  // prewBtn.addEventListener('click', prewPage);
}

createPagination();
nextBtn.addEventListener('click', nextPage);
function nextPage(e) {
  page += 1;
  for (const child of createListOfpages.children) {
    if (child.className.includes('current') === true) {
      child.nextElementSibling.classList.remove('hiden');
    }
    if (
      child.className.includes('current') === true &&
      Number(child.id) === 3
    ) {
      child.nextElementSibling.classList.remove('hiden');
    }
    if (child.className.includes('current') === true && Number(child.id) > 3) {
      child.nextElementSibling.classList.remove('hiden');
      child.previousElementSibling.classList.add('hiden');
    }
    if (createListOfpages.getElementsByClassName('hiden').length <= 38) {
      createListOfpages.lastElementChild.classList.add('for-space-second');
    }
  }

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

  getFetch().then(data => createMarkup(data));
}
prewBtn.addEventListener('click', prewPage);
function prewPage() {
  page -= 1;
  for (const child of createListOfpages.children) {
    if (child.className.includes('current') === true) {
      child.classList.remove('hiden');
    }
    if (child.className.includes('current') === true && Number(child.id) >= 4) {
      if (Number(child.id) === 42) {
        child.previousElementSibling.classList.remove('hiden');
      } else if (Number(child.id) === 41) {
        child.previousElementSibling.classList.remove('hiden');
      } else {
        child.previousElementSibling.classList.remove('hiden');
        child.nextElementSibling.classList.add('hiden');
      }
    }
    if (child.className.includes('current') === true && child.id === '2') {
      child.nextElementSibling.classList.add('hiden');
    }
    if (createListOfpages.getElementsByClassName('hiden').length >= 39) {
      createListOfpages.lastElementChild.classList.remove('for-space-second');
    }
  }

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

  getFetch().then(data => createMarkup(data));
}
