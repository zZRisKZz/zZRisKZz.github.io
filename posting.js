function addNewPost() {
  var icon = document.getElementById('icon');
  var cosas = document.getElementById('p2');
  var txt_form = document.getElementById('texto');
  var img_form = document.getElementById('imagen');

  if (icon.getAttribute("class") == "fa fa-plus") {
    icon.setAttribute("class", "fa fa-minus");
    cosas.setAttribute("class", "");
    txt_form.setAttribute("class", "hidden");
    img_form.setAttribute("class", "hidden");
  }
  else {
    icon.setAttribute("class", "fa fa-plus");
    cosas.setAttribute("class", "hidden");
    txt_form.setAttribute("class", "hidden");
    img_form.setAttribute("class", "hidden");
  }

}

function addText() {

  var form = document.getElementById('texto');
  var img_form = document.getElementById('imagen');

  if (form.getAttribute("class") == "hidden") {
    form.setAttribute("class", "");
    img_form.setAttribute("class", "hidden");
  }

}

function addImg() {

  var form = document.getElementById('imagen');
  var txt_form = document.getElementById('texto');

  if (form.getAttribute("class") == "hidden") {
    form.setAttribute("class", "");
    txt_form.setAttribute("class", "hidden");
  }
}
