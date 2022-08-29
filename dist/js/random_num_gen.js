var randomize = document.getElementById("randomize");
randomize.addEventListener("click", () => {
  var lower = document.getElementById("lower").value;
  var upper = document.getElementById("upper").value;
  var random_num = Math.floor(Math.random() * (upper - lower) + +lower);
  document.getElementById("output").innerHTML = `${random_num}`;
});
