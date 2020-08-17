'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responseJson =>
      displayResults(responseJson))
    .catch(errorMessage);
}

function displayResults(responseJson) {
  console.log(responseJson.message);
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  $('.results').removeClass('hidden');
}

function validateResponse(response) {
  if (!response.ok) {
    throw Error();
  }
  return response.json();
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    $(".results").empty();
    let number = $("#userInput").val();
      getDogImage(number);
  });
}

function empty() {
  var x;
  x = document.getElementById("roll-input").nodeValue;
  if (x =="") {
    return false;
  };
}

function errorMessage(message) {
  $('.results').append(`<p>Something went wrong!  Please try again.</p>`);
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
