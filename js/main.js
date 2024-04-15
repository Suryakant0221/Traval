(function ($) {
  "use strict";

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Date and time picker
  $(".date").datetimepicker({
    format: "L",
  });
  $(".time").datetimepicker({
    format: "LT",
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);
// index.page form
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      mobileNumber: document.getElementById("mobileNumber").value,
      message: document.getElementById("message").value,
    };

    // Send form data to Formspre.io API
    fetch("https://formspree.io/f/mnqeogvw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          document.getElementById("statusMessage").innerHTML =
            "Message successfully submitted!";
          document
            .getElementById("statusMessage")
            .classList.add("success-message");
          // Clear form fields
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("mobileNumber").value = "";
          document.getElementById("message").value = "";
        } else {
          document.getElementById("statusMessage").innerHTML =
            "Error submitting message. Please try again later.";
          document
            .getElementById("statusMessage")
            .classList.add("error-message");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("statusMessage").innerHTML =
          "Error submitting message. Please try again later.";
        document.getElementById("statusMessage").classList.add("error-message");
      });
  });

//   contect page form

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    // Send form data to Formspre.io API
    fetch("https://formspree.io/f/mnqeogvw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          document.getElementById("success").innerHTML =
            "Message successfully submitted!";
          document.getElementById("success").classList.add("success-message");
          // Clear form fields
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
        } else {
          document.getElementById("success").innerHTML =
            "Error submitting message. Please try again later.";
          document.getElementById("success").classList.add("error-message");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("success").innerHTML =
          "Error submitting message. Please try again later.";
        document.getElementById("success").classList.add("error-message");
      });
  });

//   book now form api

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      cabType: document.getElementById("cabType").value,
      destination: document.getElementById("destination").value,
      message: document.getElementById("message").value,
    };

    // Send form data to Formspre.io API
    fetch("https://formspree.io/f/mnqeogvw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          document.getElementById("success").innerHTML =
            "Message successfully submitted!";
          document.getElementById("success").classList.add("success-message");
          // Clear form fields
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("cabType").value = "Innova"; // Reset select to default
          document.getElementById("destination").value = "";
          document.getElementById("message").value = "";
        } else {
          document.getElementById("success").innerHTML =
            "Error submitting message. Please try again later.";
          document.getElementById("success").classList.add("error-message");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("success").innerHTML =
          "Error submitting message. Please try again later.";
        document.getElementById("success").classList.add("error-message");
      });
  });
