
function check(){

  var spreadsheetID = [
    "1SgwdgtRbZ4n0ooOad5HFgVx5E0gyOXRGCMM_ZM81p7o", //publicaciones
  ];
  // Make sure it is public or set to Anyone with link can view
  var url = [
    "https://spreadsheets.google.com/feeds/cells/" + spreadsheetID[0] + "/1/public/values?alt=json",
  ];

  $.getJSON(url[0], function(data) {
    var entry = data.feed.entry;
    var i = 4;
    var out = false;
    var success = false;
    while(i < entry.length - 1 && !out){
      var user = entry[i+1]["gs$cell"]["$t"];

      if (user == encodeURIComponent($('#username').val())){
        var pass = entry[i+2]["gs$cell"]["$t"];
        if(pass == encodeURIComponent($('#pass').val())){
          var img = entry[i+3]["gs$cell"]["$t"];
          var comp = (user + "," + pass + "," + img);
          createCookie('login',comp, 3);
          var cookie = readCookie('login');
          success = true;
          document.location.href = "feed.html";
        }
        if(success == false){
          alert("Contraseña incorrecta");
        }
        out = true;
      }
      i+= 4;
      // var pass = entry[i+2]["gs$cell"]["$t"];
      // var img = entry[i+3]["gs$cell"]["$t"];
      // console.log(pass);
      // console.log(img);
    }
  });
}
