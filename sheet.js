//random ability scores
function toggleGenerator() { //toggles randomScore()
  var x = document.getElementById("randomAbility");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function randomScore() { //Generates random ability scores
  let abilityScores = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  let num1 = abilityScores[Math.floor(Math.random() * abilityScores.length)]; //gets random number from array
  let num2 = abilityScores[Math.floor(Math.random() * abilityScores.length)];
  let num3 = abilityScores[Math.floor(Math.random() * abilityScores.length)];
  let num4 = abilityScores[Math.floor(Math.random() * abilityScores.length)];
  let num5 = abilityScores[Math.floor(Math.random() * abilityScores.length)];
  let num6 = abilityScores[Math.floor(Math.random() * abilityScores.length)];
  document.getElementById("scores1").innerHTML = num1; //prints random number to div
  document.getElementById("scores2").innerHTML = num2;
  document.getElementById("scores3").innerHTML = num3;
  document.getElementById("scores4").innerHTML = num4;
  document.getElementById("scores5").innerHTML = num5;
  document.getElementById("scores6").innerHTML = num6;
}
//Character Sheet

//Slides
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
