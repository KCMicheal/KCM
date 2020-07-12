//Navbar toggle
$(document).ready(function() {
    $(window).scroll(function() {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 522)
    });
});


//Navbar collapse
$('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});

//Navbar offset
$('body').scrollspy({
    target: '#mynavbar',
    offset: 100
});

//form submission
$("form").submit(function(e) {
              
    var error = "";
    
    if ($("#email").val() == "") {
        
        error += "The email field is required.<br>"
        
    }
    
    if ($("#subject").val() == "") {
        
        error += "The subject field is required.<br>"
        
    }
    
    if ($("#content").val() == "") {
        
        error += "The message field is required.<br>"
        
    }
    
    if (error != "") {
        
       $("#error").html('<div class="alert alert-danger" role="alert"><p><strong>There were error(s) in your form:</strong></p>' + error + '</div>');
        
        return false;
        
    } else {
        
        return true;
        
    }
});

//scroll-to-top
const scrollUp = document.querySelector('.scrollUp');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 1300) {
    scrollUp.classList.add("active");
  } else {
    scrollUp.classList.remove("active");
  }
});