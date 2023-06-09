goToSign()

function $(q) {
  return document.querySelector(q)
}

var name, shortDes, des,
  icon,
  source, tags = [],
  developer,
  web, android, ios, another, version


$('#tags').addEventListener("keyup", function(e) {
  if (e.keyCode == 13) {
    if ($("#tags").value == '') {

    } else {
      tags.push($("#tags").value)
      $(".tags").innerHTML = ''
      $('#tags').value = ''
      $("#tags").focus()
      tags.forEach(function(v) {
        $('.tags').innerHTML += '<div class="tag">' + v + '</div>'
      })
    }
  }
})


function toDataURL(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(xhr.response, reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}

$("#icon").onchange = function() {
  $('#icon').files[0];

  var loader = new FileReader()
  loader.onloadend = function() {
    icon = loader.result

    document.querySelectorAll(".assets div")[0].innerHTML = '<img src="' + icon + '">';
  }
  console.log($("#icon").files[0]);

  loader.readAsDataURL($('#icon').files[0])
}

function loadIcon() {
  var value = prompt('load with icon url')
  icon = value
  document.querySelectorAll(".assets div")[0].innerHTML = `<img src="${value}">        <div>icon
          <br>
          <button onclick="$('#icon').click()">load</button>
          <button onclick="loadIcon()">url</button>
        </div>`;
}

function loadSrc() {
  var value = prompt('load with source url')
  source = value
  if (value == false || value == null) {
    document.querySelectorAll(".assets div")[1].innerHTML = `failed load         <br>
          <button onclick="$('#icon').click()">load</button>
          <button onclick="loadIcon()">url</button>
    `;
  } else {
    document.querySelectorAll(".assets div")[1].innerHTML = `loaded           <br>
          <button onclick="$('#icon').click()">load</button>
          <button onclick="loadIcon()">url</button>
    `;
  }
}

$('#source').onchange = function() {
  var loader = new FileReader()
  loader.onloadend = function() {
    source = loader.result

    document.querySelectorAll(".assets div")[1].innerHTML = 'loaded';
  }
  loader.readAsDataURL($("#source").files[0])
}

setInterval(function() {
  web = $("#website").checked
  android = $("#android").checked
  ios = $("#ios").checked
  another = $("#another").checked

  name = document.getElementById('name').value
  shortDes = $("#shortDescription").value
  des = $("#description").value
  developer = $("#developer").value
  version = $("#version").value

  if (name == '') {
    document.getElementById('submit').disabled = true
  } else if (shortDes == '') {
    document.getElementById('submit').disabled = true
  } else if (des == '') {
    document.getElementById('submit').disabled = true
  } else if (developer == '') {
    document.getElementById('submit').disabled = true
  } else if (version == '') {
    document.getElementById('submit').disabled = true
  } else if (tags.length == 0) {
    document.getElementById('submit').disabled = true
  } else {
    document.getElementById("submit").disabled = false
  }

})


$('#submit').onclick = function() {
  $('.create-div').querySelectorAll('.session').forEach(function(v, i) {
    v.style.display = 'none'
  });

  uploadIt()

}


const API_KEY = '64336d2939cf552ef728c0e1'
const WEB_URL = 'https://grean-9ebb.restdb.io/rest/apps'
const DB_NAME = 'grean-9ebb'

function uploadIt() {



  var data = JSON.stringify({
    "name": document.getElementById("name").value,
    "short_des": shortDes,
    "description": des,
    "version": version,
    "developer": developer,
    "tags": tags,
    "icon": icon,
    "source": source,
    "website": web,
    "android": android,
    "ios": ios,
  });

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;

  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
      console.log(this.responseText);
      window.onerror = function(e) {
        alert(e)
      }

      document.getElementById('stus') ? document.getElementById('stus').innerHTML = xhr.statusText + '(' + xhr.status + ")" : null

      if (xhr.status == 0) {
        document.getElementById('stus') ? document.getElementById('stus').innerHTML = 'retrying (' + xhr.status + ")" : null
      }
    }
  });

  xhr.open("POST", "https://grean-9ebb.restdb.io/rest/apps");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("x-apikey", API_KEY);
  xhr.setRequestHeader("cache-control", "no-cache");

  xhr.send(data);
  $("#uploadStatus").style.display = 'block'
}