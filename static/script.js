'use strict';

const selected = document.querySelector('#selected');
let pictures = [
      { path: './pics/asd.jpg', title: 'testTitle', desc: 'testDesc' },
      { path: './pics/asd2.jpg', title: 'testTitle', desc: 'testDesc' },
      { path: './pics/cli.png', title: 'testTitle', desc: 'testDesc' },
      { path: './pics/ever-other.png', title: 'testTitle', desc: 'testDesc' },
      { path: './pics/float-2.gif', title: 'testTitle', desc: 'testDesc' },
    ],
    id = 0;

document.body.addEventListener('keydown', event => {
  switch (event.keyCode) {
    case 37:
      if (id > 0) {
        id--;
      } else {
        id = pictures.length - 1;
      }
      break;
    case 39:
      if (id < pictures.length - 1) {
        id++
      } else {
        id = 0;
      }
      break;
  }
  selected.setAttribute('src', pictures[id].path);
});

pictures.forEach(elem => {
  const temp = document.createElement('img');
  document.querySelector('#sub-gallery').appendChild(temp);
  temp.setAttribute('src', elem.path);
  temp.onclick = () => { console.log('test'); }
  temp.classList.add('thumbnail');
});

document.querySelector('#left').onclick = () => {
  if (id > 0) {
    id--;
  } else {
    id = pictures.length - 1;
  }
  selected.setAttribute('src', pictures[id].path);
}

document.querySelector('#right').onclick = () => {
  if (id < pictures.length - 1) {
    id++
  } else {
    id = 0;
  }
  selected.setAttribute('src', pictures[id].path);
}
