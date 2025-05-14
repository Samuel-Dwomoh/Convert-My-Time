const text = "Welcome to Convert My Time!"; 
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("welcome").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100); 
    }
  }

  window.onload = typeWriter; 