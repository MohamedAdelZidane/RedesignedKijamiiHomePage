$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('transparent');
  } else {
    $('nav').removeClass('transparent');
  }
});

$(document).ready(function(){
  $(".filter-button").click(function(){
    var value = $(this).attr('data-filter');
    if(value == "all")
    {
      $('.filter').show('1000');
    }
    else
    {
      $(".filter").not('.'+value).hide('3000');
      $(".filter").filter('.'+value).show('3000');
    }
  });
  if($(".filter-button").change("active")){
    $(this).change("active");
  }
  $(this).addClass("active");
});


const buttons = document.querySelectorAll('.project');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay__inner img');

function open(e) {
  overlay.classList.add('open');
  const src= e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
}

function close() {
  overlay.classList.remove('open');
}

buttons.forEach(button => button.addEventListener('click', open));
overlay.addEventListener('click', close);




var header = document.getElementById("garb");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}























