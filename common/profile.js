function goToSign(){
  if (JSON.parse(localStorage.getItem('account'))){
    goToProfile()
  } else {
    location.href = '../signup'
  }
}

function goToProfile(){
  
}


document.querySelectorAll('nav ion-icon[name="person-circle-outline"]').forEach(function(v){
  v.onclick = function (){
    goToSign()
  }
})