document.addEventListener("DOMContentLoaded", () => {

  let angle = 0;

  const scene = document.querySelector(".scene");
  const carousel = document.querySelector(".carousel");
  const getStartedBtn = document.getElementById("getStartedBtn");

  /* ===============================
     MOUSE MOVE → 3D TILT
  =============================== */
  if (scene && carousel) {
    scene.addEventListener("mousemove", (e) => {
      const rect = scene.getBoundingClientRect();

      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = (-y / rect.height) * 15;
      const rotateY = (x / rect.width) * 15;

      carousel.style.transform = `
        rotateY(${angle}deg)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    });

    scene.addEventListener("mouseleave", () => {
      carousel.style.transform = `rotateY(${angle}deg)`;
    });
  }

  /* ===============================
     BUTTON ROTATION
  =============================== */
  window.rotateNext = function () {
    angle -= 120;
    carousel.style.transform = `rotateY(${angle}deg)`;
  };

  window.rotatePrev = function () {
    angle += 120;
    carousel.style.transform = `rotateY(${angle}deg)`;
  };

  /* ===============================
     GET STARTED BUTTON
  =============================== */
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", () => {
      window.location.href = "/mood";
    });
  }

});

/* ===============================
   MOOD SUBMIT
=============================== */
function submitMood() {
  const mood = document.getElementById("mood").value;
  const note = document.getElementById("note").value;

  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ mood, note })
  })
  .then(res => res.json())
  .then(() => {
    alert("Mood saved successfully ✅");
    document.getElementById("note").value = "";
  });
}


