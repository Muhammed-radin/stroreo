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
    
    json.forEach((data, index)=>{
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
    })
  }
});

xhr.open("GET", "https://grean-9ebb.restdb.io/rest/apps");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("x-apikey", API_KEY);
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);