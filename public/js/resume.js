(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  readTask();


  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

$('#sobre').click(function () {
  $("#multiCollapseExample1").collapse("toggle");
});

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBzTsaZY-s979MNBvpazG32_iLhV3TwDh0",
  authDomain: "sisas-1536888034262.firebaseapp.com",
  databaseURL: "https://sisas-1536888034262.firebaseio.com",
  projectId: "sisas-1536888034262",
  storageBucket: "sisas-1536888034262.appspot.com",
  messagingSenderId: "669334833240"
};
firebase.initializeApp(config);
var d = new Date();
var t = d.getTime();
var counter = t;

function readTask(){
  var ubs = firebase.database().ref("paciente/223957");
  ubs.on("child_added", function(data){
    var value = data.val();
    console.log(value.nome);
  });  
}