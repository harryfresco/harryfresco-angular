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
function changeNavLinks(page){

    //var path = window.location.pathname;
    //var page = path.split("/").pop();
    let navLinks = document.querySelectorAll(".navbarText");
  
    navLinks.forEach(links => {
      //console.log(links)
      links.classList.remove('active');
      links.classList.remove('desktopNavActive');
      links.style.visibility="visible";
      links.style.display="block";
      let actives = document.querySelectorAll('a[routerLink*="' + page + '"]');
    
      actives.forEach(each => {
      if(each.closest(".desktopNav")){
        each.classList.add('desktopNavActive');
     
      }
      else{
        
        each.style.visibility="hidden";
        each.style.display="none";
        
        let title = document.querySelector("#title");
        title.style.visibility ="visible"
        title.textContent = each.textContent;
      }
        

   
      })
    });
   
  
}
var path = window.location.pathname;
var page = path.split("/").pop();
changeNavLinks(page)
function changeImageOpacityLanding(opacity) {
  const image = document.querySelector('.backgroundImage');
  image.style.opacity = opacity;
}


    function displayRandomMessage() {
      const list = 
      [
          "entry, please...",
          "open, says me"
      ]
  
        var randomIndex = Math.floor(Math.random() * list.length);
        var randomMessage = list[randomIndex];
        var messageElement = document.getElementById("landingText");
        messageElement.innerHTML = randomMessage;
    }
    //displayRandomMessage()

    function changeImageOpacity(opacity, col) {
      let image = document.querySelector(col);
      console.log(col)
      image.style.opacity = opacity;

  }
  function changeImageOpacityGallery(opacity, column) {
            
    let image = document.getElementsByClassName(column);
    var imageIdList = new Array();

    for (var i = 0, n = image.length; i < n; ++i) {
        var el = image[i];
        el.style.opacity = opacity;
        
    }
    
}
/*   $('#firstImg').on('load', function(){
    $('#loading').hide();
    $('#fullscreen').hide();
    console.log("HI!")
  }) */