function showMusic(id) {
  if(id=='mobile'){
    let musicDiv = document.getElementById('musicContainerMobile');
    musicDiv.innerHTML="<audio controls id='musicMobile' class='musicText' style='visibility: hidden; position:relative'><source src='assets/media/gallery.mp3' type='audio/mpeg'> Your browser does not support the audio element.</audio>";
    let music = document.getElementById("musicMobile")
    music.play();
    music.style.visibility="visible";
  }
  else{
    let musicDiv = document.getElementById('musicContainer');
    musicDiv.innerHTML="<audio controls id='music' class='musicText' style='visibility: hidden; position:relative'><source src='assets/media/gallery.mp3' type='audio/mpeg'> Your browser does not support the audio element.</audio>";
    let music = document.getElementById("music")
    music.play();
    music.style.visibility="visible";
  }

}

function myFunction() {
  var x = document.getElementById("myLinks");
  var title = document.getElementById("title");
  
  if (x.style.display === "block") {
    title.style.visibility = "visible";
    title.style.display='block'
    x.style.display = "none";
  } else {
    title.style.visibility = "hidden";
      title.style.display='none'
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
      let actives = document.querySelectorAll('a[href*="#' + page + '"]');
  
      
      actives.forEach(each => {
        
      if(each.closest(".desktopNav")){
        each.classList.add('desktopNavActive');
        
      }
      else{
        
        each.classList.add('mobileActive');
        
       //let title = document.querySelector("#title");
        //title.style.visibility ="visible"
        //title.textContent = each.textContent;
      }
        

   
      })
    });
   
    myFunction()
}

function setNavLink(){
    var path = window.location.pathname;
    //console.log(path)
    changeNavLinks(path)
}
//window.onload(setNavLink())


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
      image.style.opacity = opacity;

  }
  function changeImageOpacityGallery(opacity, column) {
            //console.log(column)
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



function fullscreen(img){
  const fullPage = document.querySelector('#fullpage');
  fullPage.style.display = 'block';
//img = img.substr(0, img.lastIndexOf(".")) + ".webp";
  fullPage.style.backgroundImage = 'url(' + img+ ')';

}
// Where el is the DOM element you'd like to test for visibility
function isHidden(el) {
  let navItemsDigital = document.querySelectorAll("#digitalItems");
  let style = window.getComputedStyle(el);
  el.forEach(links => {
    style
  })

  return (style.display === 'none')
}

function showNavLinks(page){

  //var path = window.location.pathname;
  //var page = path.split("/").pop();
 // let allItems = document.getElementsByClassName(".navItems");
  let navItemsDigital = document.querySelectorAll("#digitalItems");
  let navDivDigital = document.querySelectorAll("#digitalItems")[0]
  let navDivAnalogue = document.querySelectorAll("#analogueItems")[0]
  let navItemsAnalogue = document.querySelectorAll("#analogueItems");
  let navChooserDigital = document.querySelectorAll("#digital")[1];
  let navChooserAnalogue = document.querySelectorAll("#analogue")[1];
  if(page=="digital"){
    if(window.getComputedStyle(navDivDigital).display=='none'){
      navChooserAnalogue.style.textDecoration = "none"
      navItemsDigital.forEach(links => {
        links.style.visibility="visible";
        links.style.display="inline";
      })
        navChooserDigital.style.textDecoration = "underline"
      navItemsAnalogue.forEach(links => {
        links.style.visibility="hidden";
        links.style.display="none"
      })
    }
    else{
       navChooserAnalogue.style.textDecoration = "underline"
       navChooserAnalogue.style.textDecoration = "underline"
      navItemsDigital.forEach(links => {
        links.style.visibility="hidden";
        links.style.display="none";
      })
    }

  }
  else if(page=="analogue"){
    if(window.getComputedStyle(navDivAnalogue).display=='none'){
      navChooserDigital.style.textDecoration = "none"
    navItemsAnalogue.forEach(links => {
      links.style.visibility="visible";
      links.style.display="inline";
    })
    navChooserAnalogue.style.textDecoration = "underline"
    navItemsDigital.forEach(links => {
      links.style.visibility="hidden";
      links.style.display="none"
    })
  }
  else{
      navChooserDigital.style.textDecoration = "underline"
      navChooserAnalogue.style.textDecoration = "underline"
    navItemsAnalogue.forEach(links => {
      links.style.visibility="hidden";
      links.style.display="none";
    })
  }

  }
 

}