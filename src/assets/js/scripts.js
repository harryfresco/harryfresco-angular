function showMusic() {

    let musicDiv = document.getElementById('musicContainer');
    musicDiv.innerHTML="<audio controls id='music' class='musicText' style='visibility: hidden; position:relative'><source src='../media/gallery.mp3' type='audio/mpeg'> Your browser does not support the audio element.</audio>";
    let music = document.getElementById("music")
    music.play();
    music.style.visibility="visible";
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
var path = window.location.pathname;
    var page = path.split("/").pop();
    let navLinks = document.querySelectorAll(".navbarText");

    navLinks.forEach(links => {
      console.log(links)
      links.classList.remove('active');
      let actives = document.querySelectorAll('a[href*="' + page + '"]');
      actives.forEach(each => {
        each.classList.add('desktopNavActive');
      })
    });
    let title = document.querySelector("#title");
    console.log(title)
      title.style.visibility ="visible"
      title.textContent = document.querySelector('a[href*="' + page + '"]').textContent;
function changeNavTitle(){
    var path = window.location.pathname;
    var page = path.split("/").pop();
    let navLinks = document.querySelectorAll(".navbarText");

    navLinks.forEach(links => {
      console.log(links)
      links.classList.remove('active');
      let actives = document.querySelectorAll('a[href*="' + page + '"]');
      actives.forEach(each => {
        each.classList.add('desktopNavActive');
      })
    });
    let title = document.querySelector("#title");
    console.log(title)
      title.style.visibility ="visible"
      title.textContent = document.querySelector('a[routerLink*="' + page + '"]').textContent;
}

