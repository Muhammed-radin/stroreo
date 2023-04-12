function goToSign(main){
  if (JSON.parse(localStorage.getItem('account'))){
    goToProfile()
  } else {
    location.href = main == undefined ? '../signup' : './signup'
  }
}

function goToProfile(){
  
}


document.querySelectorAll('nav ion-icon[name="person-circle-outline"]').forEach(function(v){
  v.onclick = function (){
    goToSign()
  }
})