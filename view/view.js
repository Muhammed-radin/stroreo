var nowUrl = window.location.href;

if (location.search == '' || location.search == false) {
  document.getElementById('no_id').style.display = 'block'
  document.getElementById('preload').style.display = 'none'
  document.getElementById('body').style.display = 'none'
} else {
  document.getElementById('no_id').style.display = 'none'
  document.getElementById('body').style.display = 'none'
  document.getElementById('preload').style.display = 'block'


  var params = location.search.replace('?', '');
  var app = params.replace('app=', '')
  console.log(app);

  const API_KEY = '64336d2939cf552ef728c0e1'
  const WEB_URL = 'https://grean-9ebb.restdb.io/rest/apps'
  const DB_NAME = 'grean-9ebb'

  var data = null

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;

  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
      var response = xhr.response;
      var res = JSON.parse(response)
      window.onerror = function(e) {
        alert(e)
      }

      document.getElementById('preload').style.display = 'none'
      document.getElementById('body').style.display = 'block'

      document.getElementById('logo').src = res.icon
      document.querySelectorAll('img').forEach(function(v, i) {
        v.onerror = function() {
          v.src = '../source/image.png'
        }
      })
      
      document.getElementById('appName').innerHTML = res.name
      document.getElementById('devName').innerHTML = res.developer
      document.getElementById('postBy').innerHTML = res.author = 'author'
      document.getElementById('appDes').innerHTML = res.description
      document.getElementById('downloadBtn').onclick = function (){
        window.open(res.source)
        console.log(res)
      }

      document.getElementById('tags').innerHTML = ''
      res.tags.forEach(function(v, i) {
        document.getElementById('tags').innerHTML += '<div class="tag">' + v + '</div>'
      })

      var platform = ''

      if (res.website) {
        platform += "website"
      }

      if (res.android) {
        platform += platform.length == 0 ? "android" : ", android"
      }

      if (res.ios) {
        platform += platform.length == 0 ? "ios" : ", ios"
      }

      if (res.another) {
        platform += platform.length == 0 ? "source" : ", source"
      }

      document.getElementById('textVer').innerHTML = res.version
      document.getElementById('textPlat').innerHTML = platform
      document.getElementById('textDev').innerHTML = res.developer
      document.getElementById('appDes').innerHTML = res.description

      
    }
  });

  xhr.open("GET", "https://grean-9ebb.restdb.io/rest/apps/" + app);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("x-apikey", API_KEY);
  xhr.setRequestHeader("cache-control", "no-cache");

  xhr.send(data)
}