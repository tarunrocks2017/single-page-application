/* eslint-disable no-undef */
$('#addMovie').click((e) => {
  e.preventDefault();
  $.ajax({
    url: '/addMovie',
    method: 'post',
    data: {
      moviename: $('#moviename').val(),
      releaseYear: $('#releaseYear').val(),
      status: $('#status').val(),
      image: $('#image').val(),
      actorname: $('#actorname').val(),
      description: $('#desc').val(),
    },
    success: (data) => {
      if (data !== false) {
        window.location.href = '/movies.html';
      }
    },
    error: (err) => {
      alert(err);
    },
  });
});
