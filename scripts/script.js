/*Student Name: Andia Dark
  File Name: script.js
  Date: 11/08/2021 
*/ 

  //Hamburger menu function
  function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
}
//function to display content
function content() {
  var text = document.getElementById("new");
  text.textContent = "Thank you for visiting my website!";
  text.style.color = "#FFFFFF";
  text.style.fontSize = "2em";
}
