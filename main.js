const API_KEY = '64336d2939cf552ef728c0e1'
const WEB_URL = 'https://grean-9ebb.restdb.io/rest/apps'
const DB_NAME = 'grean-9ebb'

var data = null

var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function() {
  if (this.readyState === 4) {
    var res = xhr.response
    var json = JSON.parse(res)

    document.getElementById('body').innerHTML = ''

    json.forEach((data, index) => {
      var html = `
        <div class="card">
          <div class="card-head">
            <img src="${data.icon}" alt="" class="img-preview">
            <div class="headers">
              <p>${data.name}</p>
              <p class="subtitle"> ${data.developer} [ v ${data.version} ]</p>
            </div>
          </div>
          <div class="card-des">
            ${data.short_des}
          </div>
          <div class="card-footer">
            <button type="submit" class="bg-primary">download
              <ion-icon name="download-outline"></ion-icon>
            </button>
            <button type="submit" onclick="window.location.href = './view/?app=${data._id}'">view
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </div>
        </div>
    `
      document.getElementById('body').innerHTML += html

      document.querySelectorAll('img').forEach(function(v, i) {
        v.onerror = function() {
          v.src = 'source/image.png'
        }
      })
    })
  }
});

xhr.open("GET", "https://grean-9ebb.restdb.io/rest/apps");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("x-apikey", API_KEY);
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);


document.querySelector('nav ion-icon[name="person-circle-outline"]').onclick = function() {
  goToSign(true)
}

if (JSON.parse(localStorage.getItem('loggedin')) == true) {
  myDbRequest(BASE_URL + 'accounts/' + JSON.parse(localStorage.getItem('account'))._id, 'GET', null, function(xhr) {
    if (xhr.status == 400 || xhr.status == 403 || xhr.status == 404) {
      if (confirm('cannot get your account, because your account banned or removed. please create new account, are you ready to signup')){
        location.href = 'signup'
      }
      //localStorage.clear()
    }
  })
} else {
  localStorage.setItem('loggedin', 'false')

  var data = JSON.stringify({
    "name": 'Unkown_user' + Math.floor(Math.random() * 99999),
    "email": 'unknown' + Math.floor(Math.random() * 9999) + '@gmail.com',
    "password": 'nullpass',
    "isAdmin": "false"
  })

  myDbRequest(BASE_URL + 'accounts', 'POST', data, function(xhr) {
    localStorage.setItem('unkown_user', xhr.response)
  })
}