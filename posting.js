function addNewPost() {
  var icon = document.getElementById('icon');
  var cosas = document.getElementById('p2');

  if (icon.getAttribute("class") == "fa fa-plus") {
    icon.setAttribute("class", "fa fa-minus");
    cosas.setAttribute("class", "");
  }
  else {
    icon.setAttribute("class", "fa fa-plus");
    cosas.setAttribute("class", "hidden");
  }

}

function addText() {

  var form = document.getElementById('texto');
  var img_form = document.getElementById('imagen');

  if (form.getAttribute("class") == "texto hidden") {
    form.setAttribute("class", "texto");
    img_form.setAttribute("class", "imagen hidden")
  }


}

function addImg() {

  var form = document.getElementById('imagen');
  var txt_form = document.getElementById('texto');

  if (form.getAttribute("class") == "imagen hidden") {
    form.setAttribute("class", "imagen");
    txt_form.setAttribute("class", "texto hidden")
  }
}
