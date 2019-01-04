/* eslint-disable no-undef */
$.ajax({
  url: '/movies',
  method: 'get',
  success: (data) => {
    data.forEach((element) => {
      const contentDiv = `<div class='data-container'>
        <div class='content-image'><img src=../images/${element.image_url}></div>
        <div class='content-info'><h5>${element.moviename}</h5></div>
        <div class='content-info'><h5>${element.releaseYear}</h5></div>
        <div class='content-info'><h5>${element.status}</h5></div>
        <div class='content-info'><h5>${element.actorname}</h5></div>
        <div class='content-info'>
        <button class='edit-button' name=${element.movieid}>EDIT</button>
        <button class='delete-button' name=${element.movieid}>DELETE</button>
        </div>
        </div>`;
      $('.content-list').append(contentDiv);
    });
  },
});

$(document).ready(() => {
  $('.edit-button').click((e) => {
    e.preventDefault();
    window.localStorage.setItem('movieid', `${e.target.name}`);
    window.location.href = '/editMovie.html';
  });

  $('.delete-button').click((e) => {
    e.preventDefault();
    $.ajax({
      url: '/deleteMovie',
      method: 'post',
      data: {
        id: e.target.name,
      },
      success: (data) => {
        if (data !== false) {
          window.location.href = '/movies.html';
        }
      },
    });
  });
});
