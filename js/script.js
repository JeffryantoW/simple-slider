var images = ["img1","img2","img3","img4","img5","img6"];
var currentIndex = 0;
var autoSlideShowState = false;
var interval = null;

function next(isHuman){
  if(isHuman == true)// Check apakah user yang klik atau dari auto slide show
    clearInterval(interval);
 
 document.getElementById(images[currentIndex]).style.display = "none";
 currentIndex+=1
      if(currentIndex == 6){
    currentIndex = 0;
  }
document.getElementById(images[currentIndex]).style.display="inline";
}

function prev(){
 document.getElementById(images[currentIndex]).style.display = "none";
 currentIndex-=1
      if(currentIndex == -1){
    currentIndex = 5;
  }
document.getElementById(images[currentIndex]).style.display = "inline";
}

function toggleAutoSlideShow(){
      var toggleAutoSlideShowButton = document.getElementById("autoSlideShow");
  
  if(autoSlideShowState === false){
    autoSlideShowState = true;
    interval = setInterval(function(){next(false); }, 3000);    
  toggleAutoSlideShowButton.style.backgroundColor = "#66cc91";
   toggleAutoSlideShowButton.innerHTML = "Toggle Auto Slide Show : On";
  }
  else if(autoSlideShowState === true){
    autoSlideShowState = false;
    clearInterval(interval);
      toggleAutoSlideShowButton.style.backgroundColor = "#4c66b2";
   toggleAutoSlideShowButton.innerHTML = "Toggle Auto Slide Show : Off";
  }
  
}