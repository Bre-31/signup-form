
document.querySelector("button").addEventListener("click", (event) => {
   event.preventDefault();
   const inputs = [...document.querySelectorAll("input")];
   if (!inputs.every((input) => input.classList.contains("valid"))) {
      document.querySelector("button").classList.add("shake");
      document.querySelectorAll("input").forEach((input) => {
         if (!input.classList.length || input.classList.contains("invalid")) {
            input.classList.add("shake");
         }
         setTimeout(() => {
            input.classList.remove("shake");
         }, 600);
      });

      setTimeout(() => {
         document.querySelector("button").classList.remove("shake");
      }, 600);
   } else {
      // animate checkmark on valid form submit
      const checkmark = document.querySelector(".checkmark");
      document.querySelector("button").firstElementChild.classList.add("invisible");
      checkmark.classList.remove("hide");
      setTimeout(() => {
         checkmark.classList.add("grow");
      }, 100);

      setTimeout(() => {
         checkmark.classList.remove("grow");
         checkmark.classList.add("hide");
         document.querySelector("button").firstElementChild.classList.remove("invisible");
      }, 2000);
   }
});







function testStrength(password) {
   const passwordTest = passwordStrengthTest.test(password);
   if (passwordTest.strong) {
      return "strong";
   }
   if (password.length > 7 && passwordTest.passedTests.length > 3) {
      return "medium";
   }
   return "weak";
}




function validateInput(input) {
    const { id, value } = input;
    input.classList.remove("valid", "invalid");
    let valid = false;
    switch (id) {
       case "name":
          valid = /^\S.*/.test(value);
          break;
       case "email":
          valid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
          break;
       case "password":
          valid = testStrength(value) !== "weak";
          break;
       case "confirm":
          valid = value && value === document.querySelector("#password").value;
          break;
    }
    input.classList.add(valid ? "valid" : "invalid");
    return valid;
 }
 
 function showError(input) {
    const element = input.parentElement.firstElementChild;
    element.classList.remove("hide");
    setTimeout(() => {
       element.classList.add("fadeout");
    }, 900);
 
    setTimeout(() => {
       element.classList.add("hide");
       element.classList.remove("fadeout");
    }, 3200);
 }