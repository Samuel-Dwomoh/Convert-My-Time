const text = "Welcome to Convert My Time!";
const time = document.getElementById("time");
let images =  ["/Images/glenn-carstens-peters-ZWD3Dx6aUJg-unsplash.jpg", "/Images/tird.jpg", "/Images/people.jpg", "/Images/andres.jpg", "/Images/carlos.jpg", "/Images/airport-2373727_1280.jpg", "/Images/pret.jpg", "/Images/building.jpg", "/Images/map.jpg"];
let heroImage = document.getElementById("hero-image");
const timeElement = document.getElementById("time");
const now = new Date();

setInterval(()=>{
  timeElement.innerHTML = new Date().toLocaleDateString('en-US', {
    weekday: 'short', 
    hour: '2-digit',
    timeZoneName: 'short',
    minute: '2-digit',
  });
}, 1000);


let currentIndex = 0;
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typed-text").textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 200);
    } else {
      setTimeout(() => {
        document.getElementById("typed-text").textContent = "";
        i = 0;
        typeWriter();
      }, 7000); 
    }
  }
   

   setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    heroImage.classList.add("opacity-100");
  
    setTimeout(() => {
      heroImage.src = images[currentIndex];
      heroImage.classList.remove("opacity-0");
    }, 0);
  }, 9000); 


function calculate(){
  
}

  window.onload = typeWriter;

