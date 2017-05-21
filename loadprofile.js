$(document).ready(function(){

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
      parent.prepend(p);
      return p;
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

    function readData() {
      var cookie = readCookie('login');
      var cookie = readCookie('login');
      var username = "";
      var i = 0;
      while(cookie[i] != ","){
        username = (username + cookie[i]);
        i++;
      }
      i++;

      while(cookie[i] != ","){ i++;}
      i++;

      var avatar = "";
      while(i < cookie.length){
        avatar = (avatar + cookie[i]);
        i++;
      }

      var text1 = ("Usuario: " + username);
      addImg($(".pic"), avatar);
      var p1 = addP($(".info"), text1);
    }

    readData();

});
