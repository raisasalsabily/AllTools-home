var randomize = document.getElementById("randomize");
randomize.addEventListener("click", () => {
  var upper = parseInt(document.getElementById("upper").value);
  var lower = parseInt(document.getElementById("lower").value);

  if (upper > lower){
    var random_num = Math.floor(Math.random() * (upper - lower) + +lower);
    document.getElementById("output").innerHTML = `${random_num}`;
  }
  else{
    window.alert("Masukkan angka kedua yang lebih kecil!");
    document.getElementById("lower").value = null;
    document.getElementById("output").innerHTML = '0';
  };
});
