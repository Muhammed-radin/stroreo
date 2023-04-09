function $(q) {
  return document.querySelector(q)
}

var name, des, type,
  icon, screenshot = [],
  source, tags = [],
  web, android, ios, another


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

/*setInterval(function() {
  if (name && des && type && icon && source) {
    $("#submit").disabled = false
  } else {
    $("#submit").disabled = false
  }

})*/

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

$("#screenshots").onchange = function() {
  var files = document.getElementById('screenshots').files;
  
  files.forEach(function(v, i) {
    var loader = new FileReader()
    loader.onloadend = function() {
      screenshot.push(loader.result)

      document.querySelectorAll(".assets div")[1].innerHTML = '';
      document.querySelectorAll(".assets div")[1].innerHTML += '<img src="' + screenshot[i] + '">';
    }
    
    loader.readAsDataURL(v)
  })
}


$('#submit').onclick = function() {
  $('.create-div').querySelectorAll('.session').forEach(function(v, i) {
    v.style.display = 'none'
  })
  $(".create-div").innerHTML += '<center><p>Converting...</p><progress max=100 id="progress"></progress></center>'

  name = $("#name").value
  des = $("#description").value
  type = $("#type").value

  /* var loadscreenData = {}
  $('#screenshots').files.forEach(function(v) {
    loadscreenData
  })*/
}