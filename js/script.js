//Copyright  
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerText = currentYear;

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

//typed.js
var typed = new Typed('.typed', {
    strings: ['I\'m a Web Designer.', 'I\'m a Web Developer.', 'I\'m a Ui/Ux Designer.', 'I\'m a Software Developer.'],
    typeSpeed: 70,
    backSpeed: 10,
    smartBackspace: true, // this is a default
    loop: true
  });

  //testimonials
  $('.swag').slick({
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: true
    }
    },
    {
    breakpoint: 600,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 2
    }
    },
    {
    breakpoint: 480,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    }
    
    ]
    });


    //UserOnboarding
(function (g, u, i, d, e, s) { g[e] = g[e] || []; 
    var f = u.getElementsByTagName(i)[0]; var k = u.createElement(i); 
    k.async = true; k.src = 'https://static.userguiding.com/media/user-guiding-' + s + '-embedded.js'; 
    f.parentNode.insertBefore(k, f); 
    if (g[d]) return; var ug = g[d] = { q: [] }; 
    ug.c = function (n) { return function () { ug.q.push([n, arguments]) }; }; 
    var m = ['previewGuide', 'finishPreview', 'track', 'identify', 'triggerNps', 'hideChecklist', 'launchChecklist']; 
    for (var j = 0; j < m.length; j += 1) { ug[m[j]] = ug.c(m[j]); } })(window, document, 'script', 'userGuiding', 'userGuidingLayer', '646225641ID'); 