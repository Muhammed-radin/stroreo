var nowUrl = window.location.href;

if (location.search == '' || location.search == false) {
  //document.getElementById('no_id').style.display = 'block'
  //document.getElementById('body').style.display = 'none'
} else {
  document.getElementById('no_id').style.display = 'none'
  // document.getElementById('body').style.display = 'block'
}

var params = location.search.replace('?', '');
var app = params.replace('app=', '')
console.log(app);