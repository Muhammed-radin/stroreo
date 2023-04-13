function connectCommonScripts(filename, back) {
  var script = document.createElement('script');
  back == undefined ? script.src = '../common/' + filename : script.src = 'common/' + filename
  document.body.appendChild(script)
}

const BASE_URL = 'https://grean-9ebb.restdb.io/rest/'


function myDbRequest(url, method, data, callback) {
  const API_KEY = '64336d2939cf552ef728c0e1'
  const WEB_URL = url
  const DB_NAME = 'grean-9ebb'
  var data = data
  
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;
  
  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
      
      window.onerror = function(e) {
        alert(e)
      }
      
      callback(xhr)
    }
  });
  
  xhr.open(method, WEB_URL);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("x-apikey", API_KEY);
  xhr.setRequestHeader("cache-control", "no-cache");
  
  xhr.send(data);
}


