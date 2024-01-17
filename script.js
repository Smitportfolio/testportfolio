







document.addEventListener("DOMContentLoaded", function () {
    var contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function () {
            // Reset the form after submission
            contactForm.reset();
        });
    }
});

function myFunction() {
    alert ("page is under construction!");
  }
// function Privacy() {
//     alert ("Sorry, but you cannot view Smit Patel's social media profiles without their permission.");
//   }

  


document.addEventListener("DOMContentLoaded", function() {
  // Your script here
  var earth = document.getElementById('earth_shape'),
        
          tl = new TimelineMax(),
          tl2 = new TimelineMax({repeat:-1, yoyo: true}),
          tl3 = new TimelineMax({repeat:-1, yoyo: true});
      
          tl
             .from(earth, 3, {rotation: 360,

              transformOrigin:"center",
              ease: Power0.easeNone,  
              repeat:-1});
              var btn = document.getElementById('scrollup');
      
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
       btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
    });
                            
    btn.addEventListener('click', function(e) {
      e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    });

                              
});




document.addEventListener("DOMContentLoaded", function () {
  var customCarousel = document.querySelector(".custom-carousel");
  var items = document.querySelectorAll(".custom-carousel .item");

  items.forEach(function (item) {
    item.addEventListener("click", function () {
      items.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
      item.classList.toggle("active");
    });
  });

  // Owl Carousel initialization (replace with your actual settings)
  new OwlCarousel(customCarousel, {
    autoWidth: true,
    loop: true
  });
});

// Owl Carousel constructor (replace with your actual implementation)
function OwlCarousel(element, options) {
  // Implement Owl Carousel initialization logic here
  // You can use a library like Owl Carousel or create your own logic
}
