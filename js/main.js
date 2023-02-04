import axios from 'axios';
const listNews = document.querySelector('.episodes');

async function getFetch() {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/episode');
    console.log(response.data);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}
getFetch().then(data => createMarkup(data));

function createMarkup(images) {
  const markup = images
    .map(item => {
      console.log(item.characters[0]);
      return ` 
          <a href="${item.characters[0]}"></a>
       <img src="${item.characters[0]}" alt="">
      <p>${item.name}</p>`;
    })
    .join('');
  listNews.insertAdjacentHTML('beforeend', markup);
}
