const msNav = document.querySelector('.ms-nav');
msNav.addEventListener('click', e => {
  const image = document.createElement('img');
  const text = document.createElement('p');
  text.classList.add('rotate-text');
  text.textContent = 'Hello ! i`m ur master of navigation';
  image.src = '/rick-and-morty-30973.b77fda54.png';

  image.setAttribute(
    'style',
    'position:absolute; top:50%; left:50%;  transform: scaleX(-1); margin-top:30px; width:150px'
  );
  text.setAttribute(
    'style',
    'position:absolute; top:50%; left:50%; color:white'
  );
  document.body.style.backgroundColor = 'black';
  document.querySelector('header').style.opacity = '0.5';
  document.querySelector('main').style.opacity = '0.5';
  document.querySelector('footer').style.opacity = '0.5';
  document.querySelector('header').style.pointerEvents = 'none';
  document.querySelector('main').style.pointerEvents = 'none';
  document.querySelector('footer').style.pointerEvents = 'none';
  //   document.main.style.opacity = '0.5';
  //   document.body.style.pointerEvents = 'none';
  document.body.insertAdjacentElement('beforeend', text);
  document.body.insertAdjacentElement('beforeend', image);

  setTimeout(() => {
    image.classList.add('rotate');
    text.textContent = 'Here u can see our site navigation';
    document.querySelector('header').style.opacity = '1';
    text.classList.add('rotate');

    document.querySelector('.nav-bar').style.animation =
      'colorNav 1s infinite alternate';
  }, 3000);
  setTimeout(() => {
    const btnK = document.createElement('button');
    btnK.textContent = 'Got it!';
    btnK.setAttribute('style', 'position:absolute; top:5%; left:50%; ');
    document.body.insertAdjacentElement('afterbegin', btnK);
    btnK.addEventListener('click', e => {
      const laugh = `<iframe src="https://vlipsy.com/embed/uFjK73rk" width="640" height="360" frameborder="0"></iframe>`;
      document.querySelector('main').insertAdjacentElement('afterend', laugh);
    });
  }, 5000);
});
