document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("Fullname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const gender = getSelectedGender();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    alert("Registration successful!");
  });

  function getSelectedGender() {
    const maleRadio = document.getElementById("male");
    const femaleRadio = document.getElementById("female");
    const preferNotToSayRadio = document.getElementById("preferNotToSay");

    if (maleRadio.checked) {
      return "male";
    } else if (femaleRadio.checked) {
      return "female";
    } else if (preferNotToSayRadio.checked) {
      return "preferNotToSay";
    } else {
      return "";
    };
  }