'use strict';

const pic = document.querySelector('.showed');
let pictures = [
      { path: './pics/asd.jpg', title: 'testTitle', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laborum. Quis, saepe.' },
      { path: './pics/asd2.jpg', title: 'testTitle2', desc: 'Minima dignissimos rem laudantium nam ex reprehenderit ducimus accusamus quo cum tempore quae perferendis placeat voluptate, provident modi.' },
      { path: './pics/cli.png', title: 'testTitle2', desc: 'Minima dignissimos rem laudantium nam ex reprehenderit ducimus accusamus quo cum tempore quae perferendis placeat voluptate, provident modi.' },
      { path: './pics/ever-other.png', title: 'testTitle2', desc: 'Minima dignissimos rem laudantium nam ex reprehenderit ducimus accusamus quo cum tempore quae perferendis placeat voluptate, provident modi.' },
      { path: './pics/float-2.gif', title: 'testTitle2', desc: 'Minima dignissimos rem laudantium nam ex reprehenderit ducimus accusamus quo cum tempore quae perferendis placeat voluptate, provident modi.' },
    ],
    id = 0;

document.querySelector('.left').onclick = function() {
  if (id > 0) {
    id--;
  } else {
    id = pictures.length - 1;
  }
  pic.setAttribute('src', pictures[id].path);
}

document.querySelector('.right').onclick = function() {
  if (id < pictures.length - 1) {
    id++
  } else {
    id = 0;
  }
  pic.setAttribute('src', pictures[id].path);
}
