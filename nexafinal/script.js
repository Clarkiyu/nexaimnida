let currentSlide = 0; // Keep track of the current slide index

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel .img-container');
    const totalSlides = slides.length;

    // Update the currentSlide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Move the carousel by adjusting the transform property
    const carousel = document.querySelector('.carousel');
    const slideWidth = slides[0].offsetWidth;  // Get the width of a single image
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
   // Get the select element by ID
   const sortOptions = document.getElementById('sortOptions');

   // Add an event listener to handle change events
   sortOptions.addEventListener('change', function() {
       const selectedValue = this.value;

       // Redirect to a specific URL based on the selected value
       if (selectedValue === 'price') {
           window.location.href = 'price.html'; // Stay on price.html for price sorting
        } else if (selectedValue === 'default') {
            window.location.href = 'products.html';
       } else if (selectedValue === 'popularity') {
           window.location.href = 'products.html';
       } else {
           window.location.href = 'products.html'; // Default
       }
   });

