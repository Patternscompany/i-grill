(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner(0);

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  document.addEventListener("click", function (event) {
    const navbarCollapse = document.getElementById("navbarCollapse");
    const isNavbarOpen = navbarCollapse.classList.contains("show"); // Check if navbar is open
    const isClickInsideNavbar =
      navbarCollapse.contains(event.target) ||
      event.target.closest(".navbar-toggler");

    if (isNavbarOpen && !isClickInsideNavbar) {
      // Close the navbar
      const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);
      collapseInstance.hide();
    }
  });

  // testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="fa fa-angle-right"></i>',
      '<i class="fa fa-angle-left"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  });
  $(".gallery-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
  $(".about-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 5,
    time: 2000,
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Select the popup container and buttons
  const popupContainer = document.getElementById("popupContainer");
  const openPopupButtons = document.querySelectorAll(".btn-open-popup");
  const closePopupButton = document.getElementById("closePopup");
  const priceForm = document.getElementById("priceCalculatorForm");
  const resultDisplay = document.getElementById("resultDisplay");

  // Open popup for each button
  openPopupButtons.forEach((button) => {
    button.addEventListener("click", () => {
      popupContainer.style.display = "flex"; // Show the popup
    });
  });

  // Close popup
  closePopupButton.addEventListener("click", () => {
    popupContainer.style.display = "none"; // Hide the popup
  });

  const calculatorForm = document.getElementById("calculationForm");
 
  function calculate() {
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);

    // Tracks
    const tracksValue = (width) / 10 * 2;
    const tracksPrice = tracksValue * 1300;

    // Bolts
    const boltsValue = tracksValue * 25;
    const boltsPrice = boltsValue * 15;

    // Stiffeners
    const stiffenersValue = width * 6;
    const stiffenersPrice = stiffenersValue * 2;

    // Miss Material
    const missMaterialValue = 500;

    // Rope
    const ropeValue = stiffenersValue * height;
    const ropePrice = ropeValue * 7;

    // Fitting
    const fittingValue = width * height;
    const fittingPrice = fittingValue * 30;

    // Transport
    const transportValue = 1000;

    // Total
    const total = tracksPrice + boltsPrice + stiffenersPrice + missMaterialValue + ropePrice + fittingPrice + transportValue;

    // Margin
    const margin = total * 0.25;

    // Final Total
    const finalTotal = total + margin;

    // Per SFT
    const perSft = finalTotal / (width * height);

    document.getElementById("total").value = total.toFixed(2);
    document.getElementById("margin").value = margin.toFixed(2);
    document.getElementById("finalTotal").value = finalTotal.toFixed(2);
    document.getElementById("perSft").value = perSft.toFixed(4);
}

})(jQuery);
