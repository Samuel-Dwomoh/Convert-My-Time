const text = "Welcome to Convert My Time!";
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