var params = location.search.replace('?', '');
var paramsString = '{"' + params.replaceAll("&", '","').replaceAll('=', '":"') + '"}';
if (params == '') {

} else {
  var objectParams = JSON.parse(paramsString);
  objectParams = objectParams
  console.log(objectParams.e);

  if (objectParams.e && objectParams.p && objectParams.dl) {
    document.querySelector('.signing').style.visibility = 'unset'
    logIn(objectParams.e, objectParams.p)
  }
}

function logIt(log, css_class) {
  document.getElementById('log').innerHTML = log
  document.getElementById('log').className = css_class
}

document.querySelector('#submit').onclick = function() {
  logIn(document.getElementById('email').value, document.getElementById('password').value)
}


function logIn(email, pass) {
  const API_KEY = '64336d2939cf552ef728c0e1'
  const WEB_URL = encodeURI('https://grean-9ebb.restdb.io/rest/accounts?q={"email": "' + email + '", "password":"' + pass + '"}')
  const DB_NAME = 'grean-9ebb'

  var data = null;

  document.querySelector('.signing').style.visibility = 'unset'

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;

  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {

      window.onerror = function(e) {
        alert(e)
      }

      var res = JSON.parse(xhr.response)

      if (res.length == 0) {
        logIt('please type valid email and password', 'red')
        document.querySelector('.signing').style.visibility = 'hidden'
      } else {
        localStorage.setItem('account', JSON.stringify({
          data: xhr.response,
        }))
        
        location.href = '../'
      }
    }
  });

  xhr.open("GET", WEB_URL);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("x-apikey", API_KEY);
  xhr.setRequestHeader("cache-control", "no-cache");

  xhr.send(data);
}