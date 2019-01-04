/* eslint-disable no-undef */
$.ajax({
  url: '/editMovie',
  method: 'post',
  data: {
    id: localStorage.getItem('movieid'),
  },
  success: (data) => {
    $('#moviename').val(data[0].moviename);
    $('#releaseYear').val(data[0].releaseYear);
    $('#status').val(data[0].status);
    $('#image').val(data[0].image_url);
    $('#actorname').val(data[0].actorname);
    $('#desc').val(data[0].description);
  },
  error: (err) => {
    alert(err);
  },
});
$(document).ready(() => {
  $('#updateActor').click((e) => {
    e.preventDefault();
    $.ajax({
      url: '/updateActor',
      method: 'post',
      data: {
        actorname: $('#actorname').val(),
        activeYear: $('#activeYear').val(),
        movieid: $('#moviename').val(),
        totalmovies: $('#totalmovies').val(),
        image: $('#image').val(),
        id: localStorage.getItem('id'),
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
