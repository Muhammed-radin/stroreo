var params = location.search.replace('?', '');
var paramsString = '{"' + params.replaceAll("&", '","').replaceAll('=', '":"') + '"}';
if (params == '') {
  alert()
} else {
  var objectParams = JSON.parse(paramsString);
  objectParams = objectParams
  console.log(objectParams.e);

  if (objectParams.e && objectParams.p && objectParams.dl) {
    logIn(objectParams.e, objectParams.p)
  }
}




function logIn(email, pass) {
  const API_KEY = '64336d2939cf552ef728c0e1'
  const WEB_URL = encodeURI('https://grean-9ebb.restdb.io/rest/accounts?q={"email": "'+email+'", "password":"'+pass+'"}')
  const DB_NAME = 'grean-9ebb'

  var data = null;
  
  alert(WEB_URL)

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;

  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
      alert(this.responseText);
      window.onerror = function(e) {
        alert(e)
      }
      

    }
  });

  xhr.open("GET", WEB_URL);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("x-apikey", API_KEY);
  xhr.setRequestHeader("cache-control", "no-cache");

  xhr.send(data);
}