
var choices = ["", "Sunday June 26, 2022 (3 days / 2 nights)", "Sunday August 21, 2022 (3 days / 2 nights)"];

window.onload = function() {
  document.getElementById("date").onchange=function() {
    document.getElementById("datemessage").innerHTML=choices[this.value];
  }
  document.getElementById("date").onchange(); // show default
}
