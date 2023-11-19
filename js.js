let other = document.getElementById("other-links");
let pop = document.getElementById("pop");

other.addEventListener("click", function () {
  pop.style.display = "block";
  ex.style.display = "block";
  other.style.display = "none";
});

ex.addEventListener("click", function () {
  pop.style.display = "none";
  ex.style.display = "none";
  other.style.display = "block";
});
