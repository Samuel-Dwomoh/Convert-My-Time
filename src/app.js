const text = "Welcome to Convert My Time!";
let images = ["public\Images\airport-632290_1280.jpg", "public\Images\airport-2373727_1280.jpg"]
 for (let i=0; i<=images.length; i++){
    
 }
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typed-text").textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 200);
    } else
    document.getElementById("cursor").style.display = "none";
  }

  window.onload = typeWriter;