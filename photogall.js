
"use strict";


var image = document.getElementById("image");
           var currentPos = 0;
           var images = ["foto1.jpg", "tiger-1.jpg", "columns.jpg"]

           function nextimage() {
               if (++currentPos >= images.length)
                   currentPos = 0;

               image.src = images[currentPos];
           }

           setInterval(nextimage, 300)
