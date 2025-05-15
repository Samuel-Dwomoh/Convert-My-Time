const text = "Welcome to Convert My Time!";
let images =  ["/Images/glenn-carstens-peters-ZWD3Dx6aUJg-unsplash.jpg", "/Images/tird.jpg", "Images/people.jpg", "Images/andres.jpg", "carlos.jpg", "/Images/airport-2373727_1280.jpg"];
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
    } else
    document.getElementById("cursor").style.display = "none";
  }

   setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    heroImage.classList.add("opacity-0");
  
    setTimeout(() => {
      heroImage.src = images[currentIndex];
      heroImage.classList.remove("opacity-0");
    }, 1000);
  }, 5000); 


  window.onload = typeWriter;