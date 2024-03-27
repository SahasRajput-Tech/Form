document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      if (validateForm()) {
        // If form is valid, you can submit it or perform other actions here
        console.log("Form submitted successfully!");
        // form.submit(); // Uncomment this line to submit the form
      } else {
        console.log("Form validation failed!");
      }
    });
    
    function validateForm() {
      let isValid = true;
      const requiredFields = form.querySelectorAll("[aria-label='required']");
      
      requiredFields.forEach(function(field) {
        const input = field.parentNode.querySelector("input");
        if (input.value.trim() === "") {
          isValid = false;
          input.classList.add("error");
        } else {
          input.classList.remove("error");
        }
      });
      
      return isValid;
    }
  });
  