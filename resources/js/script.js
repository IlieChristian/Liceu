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

function readMore(year){
  let moreText = document.querySelector(`.Offer[data-year="${year}"] .OfferBoxBox`); 
  let btnText = document.querySelector(`.Offer[data-year="${year}"] .ReadMore`);

  if(moreText.style.display === "none"){
    moreText.style.display = "block";
    btnText.textContent = "Ascunde";
  }else{
    moreText.style.display = "none";
    btnText.textContent = "Afișează";
  }
}