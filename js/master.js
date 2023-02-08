import animateScrollTo from 'animated-scroll-to';
const msNav = document.querySelector('.ms-nav');

msNav.addEventListener('click', e => {
  const imageRotated = document.querySelector('.rotate-image');
  const text = document.createElement('p');
  text.classList.add('rotate-text');
  text.textContent = 'Hello ! i`m ur master of navigation';
  imageRotated.style.opacity = '1';
  document.querySelector('.facts').style.opacity = '0';

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
  document.querySelector('.for-next').style.opacity = '0';

  document.body.insertAdjacentElement('beforeend', text);
  setTimeout(() => {
    imageRotated.classList.add('rotate');
    text.textContent = 'Here u can see our site navigation';
    document.querySelector('header').style.opacity = '1';
    text.classList.add('rotate');

    document.querySelector('.nav-bar').style.animation =
      'colorNav 1s infinite alternate';
  }, 1000);
  setTimeout(() => {
    const btnK = document.createElement('button');
    btnK.textContent = 'Ok';
    btnK.setAttribute('style', 'position:absolute; top:5%; left:50%; ');
    document.body.insertAdjacentElement('afterbegin', btnK);
    btnK.addEventListener('click', e => {
      const cord = document.querySelector('.random-btn');
      animateScrollTo(cord, 3000);
      imageRotated.classList.add('second-rotate');
      imageRotated.classList.remove('rotate');
      document.querySelector('.facts').style.opacity = '1';
      text.setAttribute(
        'style',
        'top: 100%; left: 20%; position: absolute; color:white'
      );
      text.classList.remove('rotate');
      text.classList.add('second-rotate-text');
      document.querySelector('.for-next').style.opacity = '1';
      text.textContent = 'U can get some facts and watch trailer of new season';
      const nextButton = document.createElement('button');
      nextButton.setAttribute(
        'style',
        'position:absolute; top:120%; left:30%; '
      );
      btnK.remove();
      document.body.insertAdjacentElement('afterbegin', nextButton);
      nextButton.textContent = 'Got it!';
      document.querySelector('main').style.opacity = '1';
      nextButton.addEventListener('click', e => {
        document.querySelector('footer').style.opacity = '1';
        document.querySelector('header').style.pointerEvents = 'all';
        document.querySelector('main').style.pointerEvents = 'all';
        document.querySelector('footer').style.pointerEvents = 'all';
        imageRotated.classList.remove('second-rotate');
        imageRotated.classList.add('rotate');
        nextButton.remove();
        imageRotated.style.opacity = '0';
        text.remove();
        // msNav.remove();
        document.querySelector('.nav-bar').style.animation = 'none';
      });
    });
  }, 2000);
});
