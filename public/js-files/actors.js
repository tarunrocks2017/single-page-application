/* eslint-disable no-undef */
$.ajax({
  url: '/actors',
  method: 'get',
  success: (data) => {
    data.forEach((element) => {
      const contentDiv = `<div class='data-container'>
        <div class='content-image'><img src=../images/${element.image_url}></div>
        <div class='content-info'><h5>${element.actorname}</h5></div>
        <div class='content-info'><h5>${element.activeYear}</h5></div>
        <div class='content-info'><h5>${element.moviename}</h5></div>
        <div class='content-info'><h5>${element.totalmovies}</h5></div>
        <div class='content-info'>
      <button class='edit-button' id=${element.actorid}>EDIT</button>
        <button class='delete-button' name=${element.actorid}>DELETE</button>
        </div>
        </div>`;
      $('.content-list').append(contentDiv);
    });
  },
  error: (err) => {
    alert(err);
  },

});


$(document).ready(() => {
  $('.edit-button').click((e) => {
    e.preventDefault();
    window.localStorage.setItem('id', `${e.target.id}`);
    window.location.href = '/EditActor.html?id';
  });


  $('.delete-button').click((e) => {
    e.preventDefault();
    $.ajax({
      url: '/deleteActor',
      method: 'post',
      data: {
        id: e.target.name,
      },
      success: (data) => {
        if (data !== false) {
          window.location.href = '/Actors.html';
        }
      },
      error: (err) => {
        alert(err);
      },
    });
  });
});
