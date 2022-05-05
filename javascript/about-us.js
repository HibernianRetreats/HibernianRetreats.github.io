function confirm_reset(){
  return confirm("Please confirm you want to reset the page");
}



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var submit = document.getElementById("Send");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
/*
submit.onclick = function() {
  modal.style.display = "block";
}
*/

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




$(document).ready(function() {
  $('.nameError').hide();
  $('.emailError').hide();
  $('.commentsError').hide();
  
  $('#Send').click(function(){
    var name = $('#name').val();
    var email = $('#email').val();
    var comments = $('#comments').val();
	
	
    if(name == ""){
		$('.nameError').show();
      return false;
    } else {
		$('.nameError').hide();
	  }
	
    if(email == ''){
      $('.emailError').show();
      return false;
    }

    if(IsEmail(email)==false){
      $('.emailError').show();
      return false;
    } else {
		$('.emailError').hide();
	  }



	if(document.getElementById("comments").value.trim() == ''){
		$('.commentsError').show();
		return false;
	} else {
		$('.commentsError').hide();
		modal.style.display = "block";	// show the modal
		$('#contactForm').trigger("reset");	// reset the form
	}

    return false;
});
});

function IsEmail(email) {
var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(!regex.test(email)) {
return false;
}else{
return true;
}
}


