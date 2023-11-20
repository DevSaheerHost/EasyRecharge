const luck = document.querySelectorAll('.card')
const luckMain = document.querySelector('.card')
var time = 0

luck[0].addEventListener('click', ()=>{
  time ++
  if (time==1) {
    console.log(time)
    luck[0].classList.toggle('showError')
  } else {
    
  }
})
const __ = e =>document.createElement(e)
const _ = e =>document.querySelector(e)
var a = 0
var b = 3
var checkCard = document.querySelector('.checkDiv');
const infoTxt= document.querySelector('.infoTxt');

checkCard.addEventListener('click',()=>{
  setTimeout(checkLuck,5000);
  _('.infoTxt').innerText='Loading your Luck...'

  function checkLuck(){
    if (a == 2) {
    infoTxt.innerText='★You are Licky★'
    setTimeout(trust,2000);
    } else {
      a++
      infoTxt.innerText='unfortunately Unlucky! '+ '3/'+a +'Times Left'
      
    
    }
  }
  function trust(){
    infoTxt.innerText= 'The Number Will Recharge with in few Days...  Please Share and Suport'
  }
  
})