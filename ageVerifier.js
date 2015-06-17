function verify(age) {
  if (Array.isArray(age)) {
    for(var i = 0; i < age.length; i++) {
      if (age[i] < 21) {
        console.log("Too Young");
      } else {
        console.log("Proceed");
      } // cond
    } // for loop
  } else {
    if (age < 21) {
      console.log("Too Young");
    } else {
      console.log("Proceed");
    } //cond
  } // else
}; // func

verify([1, 29, 9])
verify(39)
