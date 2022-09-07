var randomize = document.getElementById("randomize");
randomize.addEventListener("click", () => {
  var upper = document.getElementById("upper").value;
  var lower = document.getElementById("lower").value;
  // console.log(upper);
  // console.log(lower);

  if (upper > lower){
    // console.log('true');
    var random_num = Math.floor(Math.random() * (upper - lower) + +lower);
    document.getElementById("output").innerHTML = `${random_num}`;
  }
  else{
    // console.log('false');
    window.alert("Masukkan angka kedua yang lebih kecil!");
    document.getElementById("lower").value = null;
  };
});
