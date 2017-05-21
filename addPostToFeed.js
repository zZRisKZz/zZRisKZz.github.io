$(document).ready(function(){
  // ID of the Google Spreadsheet
  var spreadsheetID = [
    "1CSoHZXaPYYZN-QK7BtXuQ7f47LeplkqXyJWPZXk9OS8", //publicaciones
  ];
  // Make sure it is public or set to Anyone with link can view
  var url = [
    "https://spreadsheets.google.com/feeds/cells/" + spreadsheetID[0] + "/1/public/values?alt=json",
  ];

  console.log(url[0]);

  $.getJSON(url[0], function(data) {
    var entry = data.feed.entry;

    function addImg(parent, src){
      var img = $("<img/>");
      $(img).attr("src",src);
      parent.append(img);
      console.log(img);
      return img;
    }

    function addP(parent, text){
      var p =  $("<p/>");
      p.append(text);
      parent.append(p);
      return p;
    }

    function addSpan(parent, username){
      var span =  $("<span/>");
      span.append(username);
      parent.append(span);
      return span;
    }

    function addPost(parent, data){
      var container = $("<div/>");
      $(container).addClass("pub");

      var head =  $("<div/>");
      $(head).addClass("user");
      addImg(head, data[2]);
      addSpan(head, data[0]);

      var content =  $("<div/>");
      $(content).addClass("content");
      addP(content, data[1]);

      container.append(head);
      container.append(content);

      parent.preppend(container);
    }

    function writeData(p, data){
      p.append(data);
    }

    function createP(parent){
      var p = $("<p/>");
      parent.append(p);
      $(p).addClass("hello");
      console.log(p);
      return p;
    }

    function readData(parent) {
      var data = entry;
      for(i = 6; i < data.length; i+=6){
        var vData =  [
          data[i]["gs$cell"]["$t"],
          data[i+3]["gs$cell"]["$t"],
          data[i+5]["gs$cell"]["$t"]
        ];
        addPost(parent, vData);
      }
    }

    readData($(".feed"));
  });

});
