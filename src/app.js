const text = "Welcome to Convert My Time!"; // this is the text it will type
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("welcome").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100); // how fast it types (100ms per letter)
    }
  }

  window.onload = typeWriter; // start typing when the page loads