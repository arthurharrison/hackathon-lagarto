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
var db = firebase.database();
var d = new Date();
var t = d.getTime();
var counter = t;
document.getElementById("form").addEventListener("submit", (e)=>{  
  var cns = document.getElementById("inputCns").value;
  e.preventDefault();
  form.reset();
  
  readTask(cns);
});

function readTask(cns){
  var paciente = firebase.database().ref("paciente/");
  paciente.on("child_added", function(data){
      let valueP = data.val();
      var cnes = valueP.cnes;
      var ubs = firebase.database().ref("ubs/");
      ubs.on("child_added", function(data){
        let valueU = data.val();
        let nome = valueU.nome;
        let bairro = valueU.Bairro;
        let travessa = valueU.Travessa;
        // console.log(valueU.nome);
        document.getElementById("ubsNome").innerHTML = "Posto de saúde: "+ nome;
        document.getElementById("ubsBairro").innerHTML = "Bairro: "+ bairro;
        document.getElementById("ubsTra").innerHTML = "Rua: "+ travessa;
      });      
  });  
}