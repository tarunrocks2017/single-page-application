/* eslint-disable no-undef */
$.ajax({
  url: '/editActor',
  method: 'post',
  data: {
    id: localStorage.getItem('id'),
  },
  success: (data) => {
    $('#actorname').val(data[0].actorname);
    $('#activeYear').val(data[0].activeYear);
    $('#totalmovies').val(data[0].totalmovies);
    $('#image').val(data[0].image_url);
    data[0].option.forEach((element) => {
      const options = `<option value=${element.movieid}>${element.moviename}</option>`;
      $('#moviename').append(options);
    });
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
