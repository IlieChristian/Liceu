let $mainmenubutton = document.getElementById('mainmenubutton');
let $mainmenulist = document.getElementById('mainmenulist');

$mainmenubutton.addEventListener('click', ()=> {
    $mainmenulist.classList.toggle('Active');
}, true);

mybutton = document.getElementById("upButton");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }