let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
homeScoreEl.textContent = homeScore;

let guestScore = 0
guestScoreEl.textContent = guestScore;

function addOnetoHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore;
    updateScoreColors();
}

function addTwotoHome() {
  homeScore += 2
  homeScoreEl.textContent = homeScore;
  updateScoreColors();
}

function addThreetoHome() {
  homeScore += 3
  homeScoreEl.textContent = homeScore;
  updateScoreColors();
}

function addOnetoGuest() {
  guestScore += 1
  guestScoreEl.textContent = guestScore;
  updateScoreColors();
}

function addTwotoGuest() {
  guestScore += 2
  guestScoreEl.textContent = guestScore;
  updateScoreColors();
}

function addThreetoGuest() {
  guestScore += 3
  guestScoreEl.textContent = guestScore;
  updateScoreColors();
}

function setToZero() {
  homeScore = 0
  guestScore = 0
  guestScoreEl.textContent = guestScore;
  homeScoreEl.textContent = homeScore;
  updateScoreColors();
}

function updateScoreColors() {
  if (homeScore > guestScore) {
      homeScoreEl.style.color = "#00FF00"; 
      guestScoreEl.style.color = "#F94F6D"; 
  } else if (guestScore > homeScore) {
      guestScoreEl.style.color = "#00FF00"; 
      homeScoreEl.style.color = "#F94F6D"; 
  } else {
      homeScoreEl.style.color = "#F94F6D"; 
      guestScoreEl.style.color = "#F94F6D"; 
  }
}