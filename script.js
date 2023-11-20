function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();

          const moNav = document.querySelector("#mo-nav");
          const openNav = document.querySelector("#open-nav");
          const closeNav = document.querySelector("#close-nav");

          openNav.addEventListener("click", function () {
            moNav.style.right = "0";
            moNav.style.transition = "0.3s";
            moNav.style.overflowY = "scroll"
            document.body.style.overflow = "hidden";
          });

          closeNav.addEventListener("click", function () {
            moNav.style.right = "-100%";
            moNav.style.transition = "0.3s";
            document.body.style.overflowY = "scroll";
          });
          
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
















