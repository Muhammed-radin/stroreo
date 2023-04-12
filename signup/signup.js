const API_KEY = '64336d2939cf552ef728c0e1'
const WEB_URL = 'https://grean-9ebb.restdb.io/rest/accounts'
const DB_NAME = 'grean-9ebb'

function logIt(log, css_class) {
  document.getElementById('log').innerHTML = log
  document.getElementById('log').className = css_class
}

function $(q) {
  return document.querySelector(q)
}

document.getElementById('submit').onclick = function() {
  if ($("#name").value == '') {
    logIt('please enter your username', 'red')
  } else if ($("#email").value == '') {
    logIt('please enter your email', 'red')
  } else if ($("#password").value == '') {
    logIt('please enter your password', 'red')
  } else if ($("#password").value.length <= 7) {
    logIt('please enter password with minimum 8 letters', 'red')
  } else if ($("#email").value.includes('@') == false) {
    logIt('please enter vaild email', 'red')
  } else if ($("#email").value.includes('.') == false) {
    logIt('please enter vaild email', 'red')
  } else if ($("#email").value.indexOf(' ') == ($('#email').value.length - 1)) {
    $("#email").value = $("#email").value.replaceAll(' ', '')
  } else if ($("#email").value.includes(' ') == true) {
    logIt('please remove spaces in email', 'red')
  } else {
    logIt('creating account, please wait...', 'green')

    var data = JSON.stringify({
      "name": $("#name").value,
      "email": $("#email").value,
      "password": $("#password").value,
      "isAdmin": "false"
    })

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        console.log(this.responseText);
        logIt('account '+xhr.statusText+" [ status: "+xhr.status+"]", 'green')

        window.onerror = function(e) {
          alert(e)
        }
      }
    });

    xhr.open("POST", "https://grean-9ebb.restdb.io/rest/accounts");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", API_KEY);
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
  }
}