jQuery( document ).ready(function() {

    /**
     * menu fixed activate
     */
    jQuery(window).bind('scroll load', function () {
        if (jQuery(window).scrollTop() > 150) {
            jQuery('#header').addClass('scrolled');
        } else {
            jQuery('#header').removeClass('scrolled');
        }

        if (jQuery(window).scrollTop() > 1 && jQuery('body.user-logged-in').length > 0) {
            jQuery('#header').addClass('user-logged-in-scrolled');
        } else {
            jQuery('#header').removeClass('user-logged-in-scrolled');
        }
    });



    /**
     * .navbar-nav .nav-link
     */
    jQuery('.navbar-nav .nav-link').on('click', function(){
        if(jQuery(window).width() < 992) {
            jQuery('.navbar-collapse').collapse('hide');
        }
    });

    /**
     * booking
     */
     if(jQuery('.webform-submission-booking-form').length > 0) {
         jQuery('.webform-submission-booking-form [name="car_title"]').val(jQuery('.sec-services .slick-active .layout__region .field--name-node-title h2.title').text());
     }
     jQuery('body').on('keyup focus click', '.webform-submission-booking-form .form-control, .webform-submission-booking-form .form-select.custom-select, .sec-services .slick-arrow', function(){
          //console.log(jQuery('.sec-services .slick-active .layout__region .field--name-node-title h2.title').text());
          jQuery('[name="car_title"]').val(jQuery('.sec-services .slick-active .layout__region .field--name-node-title h2.title').text());
      });


      /**
       * booking car slide index
       */
      if(jQuery('.sec-services').length > 0) {
          jQuery('.sec-services .slick__arrow.slick__arrow--v').attr('data-index', 1);
          jQuery('.sec-services .slick-arrow').on('click', function(){
              let activeVehicleIndex = parseInt(jQuery('.sec-services .slick__slide.slick-active').attr('data-slick-index')) + 1;
              console.log(activeVehicleIndex);
              jQuery('.sec-services .slick__arrow.slick__arrow--v').attr('data-index', activeVehicleIndex);
          });

          jQuery('#slick-node-hp-vehicle-default-1-1-slider').on('swipe', function(event, slick, direction){
              let activeVehicleIndex = parseInt(jQuery('.sec-services .slick__slide.slick-active').attr('data-slick-index')) + 1;
              jQuery('.sec-services .slick__arrow.slick__arrow--v').attr('data-index', activeVehicleIndex);
          });
      }


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

});


/**************************************** Cookie consent ****************************************/
// Creare's 'Implied Consent' EU Cookie Law Banner v:2.4
// Conceived by Robert Kent, James Bavington & Tom Foyster

var dropCookie = true;                      // false disables the Cookie, allowing you to style the banner
var cookieDuration = 14;                    // Number of days before the cookie expires, and the banner reappears
var cookieName = 'complianceCookie';        // Name of our cookie
var cookieValue = 'on';                     // Value of cookie

function createDiv(){
    var bodytag = document.getElementsByTagName('body')[0];
    var div = document.createElement('div');
    div.setAttribute('id','cookie-law');
    div.innerHTML = '<p><a class="close-cookie-banner close-cookie-banner__close" href="javascript:void(0);" onclick="removeMe();"><span>×</span></a><a class="close-cookie-banner" href="javascript:void(0);" onclick="removeMe();"><span>I agree</span></a>This page uses cookies to&nbsp;analyse our website’s traffic and usage statistics, and to&nbsp;customize content and advertising to&nbsp;enhance your user experience. This site may also contain third party cookies. By clicking "I Agree" or by using our site, you agree to the use of cookies - unless disabled through your browser.</p>';
 // Be advised the Close Banner 'X' link requires jQuery

    // bodytag.appendChild(div); // Adds the Cookie Law Banner just before the closing </body> tag
    // or
    bodytag.insertBefore(div,bodytag.firstChild); // Adds the Cookie Law Banner just after the opening <body> tag

    document.getElementsByTagName('body')[0].className+=' cookiebanner'; //Adds a class tothe <body> tag when the banner is visible

    createCookie(window.cookieName,window.cookieValue, window.cookieDuration); // Create the cookie
}


function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    if(window.dropCookie) {
        document.cookie = name+"="+value+expires+"; path=/";
    }
}

function checkCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

window.onload = function(){
    if(checkCookie(window.cookieName) != window.cookieValue){
        createDiv();
    }
}

function removeMe(){
    var element = document.getElementById('cookie-law');
    element.parentNode.removeChild(element);
}
/**************************************** END OF Cookie consent ****************************************/
