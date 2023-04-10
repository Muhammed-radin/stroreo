function $(q) {
  return document.querySelector(q)
}

var name, shortDes, des,
  icon,
  source, tags = [],
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
})


$('#submit').onclick = function() {
  $('.create-div').querySelectorAll('.session').forEach(function(v, i) {
    v.style.display = 'none'
  })

  $(".create-div").innerHTML += '<center><p>Uploading...</p><progress max=100 id="progress"></progress></center>'

  name = $("#name").value
  shortDes = $("#shortDescription").value
  des = $("#description").value
  version = $("#version").value

  setTimeout(function() {
    uploadIt()
  }, 500)
}


const API_KEY = '64336d2939cf552ef728c0e1'
const WEB_URL = 'https://grean-9ebb.restdb.io/rest/apps'
const DB_NAME = 'grean-9ebb'

function uploadIt() {
  var data = JSON.stringify({
    "name": name,
    shor_des: shortDes,
    description: des,
    version: version,
    tags: tags,
    icon: icon,
    source: source,
    website: website,
    android: android,
    ios: ios,
    source: source
  });

  console.log(data);

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;

  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("POST", "https://grean-9ebb.restdb.io/rest/apps");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("x-apikey", API_KEY);
  xhr.setRequestHeader("cache-control", "no-cache");

  xhr.send(data);
}