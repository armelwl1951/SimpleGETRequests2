'use strict';

function getDogImage( number ) {
  fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then( response => response.json() )
    .then( responseJson => 
      displayResults( responseJson ) )
    .catch( error => alert( 'Something went wrong. Try again later.' ));
}

function displayResults(responseJson) {
  console.log(responseJson);
  let imagesArray=responseJson.message;
  console.log(imagesArray);
  let content="";
  for(let i=0; i<imagesArray.length;i++) {
    content += `<img src="${imagesArray[i]}" class="results-img"/>`;
  }
  $('section').removeClass('hidden');
  $('.results').html(content);
}

function watchForm() {
  $('.container').on("submit", ".results-form", event => {
    event.preventDefault();
    let number = $('#number').val();
    getDogImage(number);
  })
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
