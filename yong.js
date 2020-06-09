function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0px";
}

function openModal() {
	document.getElementById("modal").style.display = "block";
}

function closeModal() {
	document.getElementById("modal").style.display = "none";
}

function openReg() {
	document.getElementById("reg").style.display = "block";
}

function closeReg() {
	document.getElementById("reg").style.display = "none";
}
 // var x = document.getElementById("name");
 // if (x.length < 8 )  {
 //  document.querySelector('.err').innerHTML('');
 //  // document.write("");
 // }
 //  var y = document.getElementById("Crpassword");
 //  var z = document.getElementById("Copassword");
 //  if (y!=z) {
 //  	document.write("Passwords dont match")
 //  	// console.log("Passwords dont match")
 //  }


$(document).ready(function(){


  $('.reg-btn').click(function(e){
    e.preventDefault();


    var x = $('#name').val();

    if(x.length < 8){
      $('.err').text('Name is not long enough');
      }
      else {
      $('div').removeClass('.err')
    }

    var a = $('#Copassword').val();
    var b =  $('#Crpassword').val();
    if (a!=b) {
      $('.err2').text('passwords doesnt match')
    }
  
      });
});




var slideIndex = 0; showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("image");
  for ( i=0; i< slides.length; i++) {
    slides[i].style.display= "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);

}













