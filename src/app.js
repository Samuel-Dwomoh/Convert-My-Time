//Aos and animejs js swiper
const text = "Welcome to Convert My Time!";
const time = document.getElementById("time");
let timeToRealTime = [];
let timeconverter = document.getElementById("timeConverter");
let home = document.getElementById("home")
let about = document.getElementById("about");
let images =  ["/Images/tird.jpg", "/Images/pret.jpg", "/Images/building.jpg", "/Images/map.jpg"];
let heroImage = document.getElementById("hero-image");
const timeElement = document.getElementById("time");
const now = new Date();

setInterval(()=>{
  timeElement.innerHTML = new Date().toLocaleDateString('en-US', {
    weekday: 'long', 
    hour: '2-digit',
    timeZoneName: 'short',
    minute: '2-digit',
    second: '2-digit',
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
  window.onload = typeWriter;
  
// Function to change the hero image every 9 seconds
  
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    heroImage.classList.add("opacity-100");
    
    setTimeout(() => {
      heroImage.src = images[currentIndex];
      heroImage.classList.remove("opacity-0");
    }, 0);
  }, 9000); 
  
  /** timeconverter.addEventListener("mouseleave",()=>{
    timeconverter.classList.remove("text-red-500", "px-3", "py-2", "rounded");
    })
    **/
   
   // Timezone offsets in hours relative to UTC
   const timezoneOffsets = {
     WAT: 1,
     CAT: 2,
     SAST: 2,
     EAT: 3,
  GMT: 0,
  NST: -3.5,
  AST: -4,
  EST: -5,
  CST: -6,
  MST: -7,
  PST: -8,
  AKST: -9,
  HAST: -10,
  ART: -3,
  BRT: -3,
  AMT: -4,
  COT: -5,
  CLT: -4,
  ECT: -5,
  GYT: -4,
  PYT: -4,
  PET: -5,
  VET: -4,
  IRST: 3.5,
  AFT: 4.5,
  PKT: 5,
  IST: 5.5,
  NPT: 5.75,
  BST: 6,
  MMT: 6.5,
  ICT: 7,
  CST: 8,
  KST: 9,
  JST: 9,
  AWST: 8,
  ACST: 9.5,
  AEST: 10,
  LHST: 10.5,
  NZST: 12,
  CHAST: 12.75,
  FJT: 12,
  TOT: 13,
  SST: -11,
  LINT: 14,
  WET: 0,
  CET: 1,
  EET: 2,
  MSK: 3,
  CLST: -3,
};

// Function to convert time
function convertTime() {
  //prevent the form from refreshing
  event.preventDefault();
  const fromTimezone = document.getElementById("from-timezone").value;
  const toTimezone = document.getElementById("to-timezone").value;
  const timeInput = document.getElementById("time-input").value;
  const convertedTimeElement = document.getElementById("converted-time");
  
  if (!fromTimezone || !toTimezone || !timeInput) {
    convertedTimeElement.textContent = "Please fill in all fields.";
    return;
  }
  
  const [hours, minutes] = timeInput.split(":").map(Number);
  if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    convertedTimeElement.textContent = "Invalid time format. Use HH:MM.";
    return;
  }
  
  const fromOffset = timezoneOffsets[fromTimezone];
  const toOffset = timezoneOffsets[toTimezone];
  const timeDifference = toOffset - fromOffset;
  
  const date = new Date();
  date.setHours(hours, minutes);
  date.setHours(date.getHours() + timeDifference);
  
  const convertedHours = date.getHours().toString().padStart(2, "0");
  const convertedMinutes = date.getMinutes().toString().padStart(2, "0");
  
  convertedTimeElement.textContent = `${convertedHours}:${convertedMinutes}`;
  convertedTimeElement.classList.add("text-blue-500", "text-lg", "ml-2");
}

// Add event listener to the button
document.getElementById("convert-button").addEventListener("click", convertTime);

