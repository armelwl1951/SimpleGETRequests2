'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => validateResponse(response))
    .then(responseJson => displayResults(responseJson))
    .catch(errorMessage);
}

function displayResults(responseJson) {
  console.log(responseJson.message);
  $('.results').append(
    `<img src="${responseJson.message}" class="results-img">`
  )
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

function errorMessage(message) {
  $('.results').append(`<p>Something went wrong!  Are you sure you entered a number between 1 and 50?</p>`);
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});