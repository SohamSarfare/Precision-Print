var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshowslide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 8000); // Change image every 2 seconds
}

function nextSlide(index){
	var slides = document.getElementsByClassName("slideshowslide");
	slides[index].style.display = "block";
	if(index == 0){
		slides[1].style.display = "none";
	}
	else{
		slides[0].style.display = "none";
	}
	//showSlides();
}
var dropping = 0;
function headerExpand(){
	var head = document.getElementById('drop');
	if(dropping == 0){
	head.style.display = "block";
	head.style.float = "left";
	dropping = 1;
	}
	else{
		head.style.display = "none";
		dropping = 0;
	}
}
function headerCollapse(){
	var head = document.getElementById('drop');
	head.style.display = "none";
}