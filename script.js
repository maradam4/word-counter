function myFunction() {
  var mytext = document.getElementById("txt").value;
  var myarray = mytext.split(/\s+/);
  function removeEnter(value) {
    return value != "\n";
  }
  myarray = myarray.filter(Boolean);
  myarray = myarray.filter(removeEnter);
  console.log(myarray);
  var mylen = myarray.length;
  var x = document.createElement("span");
  x.setAttribute("id", "mynum");
  var t = document.createTextNode(mylen + " ");
  x.appendChild(t);
  document.getElementById("myspan").appendChild(x);
  var z = document.createElement("br");
  document.getElementById("myspan").appendChild(z);
}

function myReset() {
  document.getElementById("txt").value = "";
  var e = document.getElementById("myspan");
  e.innerHTML = "";
}
