
"use strict";

var allInputElements = document.querySelectorAll('input');
var submitButton = document.getElementById("submit");
var answerElement = document.getElementById("answerTally");

var numberOfCorrectAnswers;

var eachInput;

submitButton.addEventListener('click', function() {

  numberOfCorrectAnswers = 0;

  allInputElements.forEach((item, i) => {
    if (item.type === 'radio' && item.checked && item.classList.contains('correct')) {
      numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
    }
  });


  answerElement.innerHTML = "You got <span>" + numberOfCorrectAnswers + "</span> out of 22! Compare to the scale at the top.";

});


var image = document.getElementById("image");
           var currentPos = 0;
           var images = ["foto1.jpg", "foto2.jpg", "foto3.jpg"]

           function nextimage() {
               if (++currentPos >= images.length)
                   currentPos = 0;

               image.src = images[currentPos];
           }

           setInterval(nextimage, 300)
