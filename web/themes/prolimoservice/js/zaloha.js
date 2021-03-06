/**
 * Smooth scroll
 */

jQuery( document ).ready(function() {
    // Select all links with hashes
    jQuery('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .not('.modal a')
      //.click(function(event) {
      .on('click', function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = jQuery(this.hash);
          target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            //event.preventDefault();
            jQuery('html, body').animate({
              scrollTop: target.offset().top - 77
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = jQuery(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
});
