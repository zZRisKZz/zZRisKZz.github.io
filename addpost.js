// NAME: entry.1409408803
// TIPO: entry.1646540622
// DATO: entry.1636019526
// AVATAR: entry.638172567
// FILE: https://docs.google.com/a/ull.edu.es/forms/d/e/1FAIpQLSeMKJCJQolk1JapvJYhEQMl_mhtW1kbeR2sNlUMVvxUL7sQew/formResponse

function post(){
    var inputName = encodeURIComponent($('#nombre').val());
    var inputType = encodeURIComponent($('#tipo').val());
    var inputData = encodeURIComponent($('#datos').val());

    var entryName = "&entry.1409408803=";
    var entryTipo = "&entry.1646540622=";
    var entryData = "&entry.1636019526=";

    var baseURL = 'https://docs.google.com/a/ull.edu.es/forms/d/e/1FAIpQLSeMKJCJQolk1JapvJYhEQMl_mhtW1kbeR2sNlUMVvxUL7sQew/formResponse?';
    var submitRef = '&submit=Submit';
    var submitURL = (baseURL + entryName + inputName + entryTipo + inputType + entryData + inputData + submitRef);
    console.log(submitURL);
    newW = window.open(submitURL);
    newW.close();
}

function postText(){
  var cookie = readCookie('login');
  var inputName = "";
  var i = 0;
  while(cookie[i] != ","){
    inputName = (inputName + cookie[i]);
    i++;
  }
  i++;

  console.log(inputName); // debug

  while(cookie[i] != ","){ i++;}
  var inputAvatar = "";
  while(i < cookie.length){
    inputAvatar = (inputAvatar + cookie[i]);
    i++;
  }

  console.log(inputAvatar); // debug


  var inputType = "txt";
  var inputData = encodeURIComponent($('#txt').val());

  var entryName = "&entry.1409408803=";
  var entryTipo = "&entry.1646540622=";
  var entryData = "&entry.1636019526=";
  var entryAvatar = "&entry.638172567=";

  var baseURL = 'https://docs.google.com/a/ull.edu.es/forms/d/e/1FAIpQLSeMKJCJQolk1JapvJYhEQMl_mhtW1kbeR2sNlUMVvxUL7sQew/formResponse?';
  var submitRef = '&submit=Submit';
  var entry =(entryName+inputName + entryTipo+inputType + entryData+inputData + entryAvatar+inputAvatar);
  var submitURL = (baseURL + entry + submitRef);
  console.log(submitURL);
  newW = window.open(submitURL);
}
