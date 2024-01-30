function doSomething(callback) {
  console.log("Funkcija doSomething buvo iškviesta!");
  callback();
}

function myCallback() {
  console.log("Callback funkcija buvo iškviesta!");
}
doSomething(myCallback);
