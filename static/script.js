'use strict';

const selected = document.querySelector('#selected'),
  httpRequest = new XMLHttpRequest();
let pictures = [],
  id = 0;

httpRequest.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=FnNNMzbs5Tzy717siUEsfZiKvJfbpgdC&q=scenery&limit=10&offset=0&rating=G&lang=en`, true);
httpRequest.onload = () => {
  const res = JSON.parse(httpRequest.responseText);

  res.data.forEach((elem, index) => {
    const temp = document.createElement('img');
    pictures.push({ id: index, static: elem.images.fixed_width_still.url, original: elem.images.original.url });
    document.querySelector('#sub-gallery').appendChild(temp);
    temp.setAttribute('src', elem.images.fixed_width_still.url);
    temp.classList.add('thumbnail');
    temp.addEventListener('click', () => {
      document.querySelector('#selected').setAttribute('src', elem.images.original.url);
      id = index;
    });
  });
};
httpRequest.send();

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
  selected.setAttribute('src', pictures[id].original);
});

document.querySelector('#left').onclick = () => {
  if (id > 0) {
    id--;
  } else {
    id = pictures.length - 1;
  }
  selected.setAttribute('src', pictures[id].original);
}

document.querySelector('#right').onclick = () => {
  if (id < pictures.length - 1) {
    id++
  } else {
    id = 0;
  }
  selected.setAttribute('src', pictures[id].original);
}
