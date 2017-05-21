// NAME: entry.987406560
// TIPO: entry.387654126
// DATO: entry.858752437
// FILE: https://docs.google.com/a/ull.edu.es/forms/d/e/1FAIpQLSdcWOj-6pJpZ0dp9WcHnCyG_-V5lBKkhGzoYLQKmRe8_aEnjw/formResponse

function post(){
    var inputName = encodeURIComponent($('#username').val());
    var inputPasswd = encodeURIComponent($('#passwd').val());
    var inputImg = encodeURIComponent($('#avatar').val());

    var entryName = "&entry.987406560=";
    var entryPasswd = "&entry.387654126=";
    var entryImg = "&entry.858752437=";

    var baseURL = 'https://docs.google.com/a/ull.edu.es/forms/d/e/1FAIpQLSdcWOj-6pJpZ0dp9WcHnCyG_-V5lBKkhGzoYLQKmRe8_aEnjw/formResponse?';
    var submitRef = '&submit=Submit';
    var submitURL = (baseURL + entryName + inputName + entryPasswd + inputPasswd + entryImg + inputImg + submitRef);
    console.log(submitURL);
    newW = window.open(submitURL);
    setTimeout(function(){
      newW.close();
      window.location.reload(true);
    },1000);
    //
}
