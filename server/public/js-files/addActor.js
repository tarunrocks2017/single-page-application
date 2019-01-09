/* eslint-disable no-undef */
$.ajax({
  url: '/getOptions',
  method: 'post',
  success: (data) => {
    data.forEach((element) => {
      const options = `<option value=${element.movieid}>${element.moviename}</option>`;
      $('#moviename').append(options);
    });
  },
  error: (err) => {
    alert(err);
  },
});
$('#addActor').click((e) => {
  e.preventDefault();
  $.ajax({
    url: '/addActor',
    method: 'post',
    data: {
      actorname: $('#actorname').val(),
      activeYear: $('#activeYear').val(),
      movieid: $('#moviename').val(),
      totalmovies: $('#totalmovies').val(),
      image: $('#image').val(),
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
