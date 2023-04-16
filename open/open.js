var params = location.search.replace('?', '');
var paramsString = '{"' + params.replaceAll("&", '","').replace('=', '":"') + '"}';


var paramsObject = JSON.parse(paramsString)
alert(paramsObject.url)
document.getElementById('emb').src = (paramsObject.url)
