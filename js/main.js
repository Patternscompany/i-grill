(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    document.addEventListener("click", function (event) {
        const navbarCollapse = document.getElementById("navbarCollapse");
        const isNavbarOpen = navbarCollapse.classList.contains("show"); // Check if navbar is open
        const isClickInsideNavbar = navbarCollapse.contains(event.target) || event.target.closest('.navbar-toggler');

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
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });
    $(".gallery-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });
    $(".about-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    const popupContainer = document.getElementById('popupContainer');
        const openPopupButton = document.querySelector('.btn-open-popup');
        const closePopupButton = document.getElementById('closePopup');
        const priceForm = document.getElementById('priceCalculatorForm');
        const resultDisplay = document.getElementById('resultDisplay');

        // Open popup
        openPopupButton.addEventListener('click', () => {
            popupContainer.style.display = 'flex';
        });

        // Close popup
        closePopupButton.addEventListener('click', () => {
            popupContainer.style.display = 'none';
        });

        // Form submission logic
        priceForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission

            // Get user input values
            const width = parseFloat(document.getElementById('width').value);
            const height = parseFloat(document.getElementById('height').value);
            
            // Validate input
            if (width <= 0 || height <= 0 || isNaN(width) || isNaN(height)) {
                resultDisplay.style.display = 'block';
                resultDisplay.style.color = 'red';
                resultDisplay.textContent = "Please enter valid dimensions greater than 0.";
                return;
            }

            // Constants for calculation
            const pricePerSft = 172.8961; // Price per square foot

            // Calculate the area
            const area = width * height;

            // Calculate the final price
            const totalPrice = area * pricePerSft;

            // Display the result
            resultDisplay.style.display = 'block';
            resultDisplay.style.color = 'green';
        });


})(jQuery);

