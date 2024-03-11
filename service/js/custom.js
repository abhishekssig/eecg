// header 


(() =>{
 
    const openNavMenu = document.querySelector(".open-nav-menu"),
    closeNavMenu = document.querySelector(".close-nav-menu"),
    navMenu = document.querySelector(".nav-menu"),
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 991;
  
    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener("click", toggleNav);
  
    function toggleNav() {
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }
  
    navMenu.addEventListener("click", (event) =>{
        if(event.target.hasAttribute("data-toggle") && 
            window.innerWidth <= mediaSize){
            // prevent default anchor click behavior
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
          // if menuItemHasChildren is already expanded, collapse it
          if(menuItemHasChildren.classList.contains("active")){
              collapseSubMenu();
          }
          else{
            // collapse existing expanded menuItemHasChildren
            if(navMenu.querySelector(".menu-item-has-children.active")){
              collapseSubMenu();
            }
            // expand new menuItemHasChildren
            menuItemHasChildren.classList.add("active");
            const subMenu = menuItemHasChildren.querySelector(".sub-menu");
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
          }
        }
    });
    function collapseSubMenu(){
        navMenu.querySelector(".menu-item-has-children.active .sub-menu")
        .removeAttribute("style");
        navMenu.querySelector(".menu-item-has-children.active")
        .classList.remove("active");
    }
    function resizeFix(){
         // if navMenu is open ,close it
         if(navMenu.classList.contains("open")){
             toggleNav();
         }
         // if menuItemHasChildren is expanded , collapse it
         if(navMenu.querySelector(".menu-item-has-children.active")){
              collapseSubMenu();
       }
    }
  
    window.addEventListener("resize", function(){
       if(this.innerWidth > mediaSize){
           resizeFix();
       }
    });
  
  })();
  

// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



// owl carousel slider js
var owl = $('.project_carousel').owlCarousel({
    loop: false,
    margin: 15,
    center: true,
    startPosition: 2,
    autoplay: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            margin: 0
        },
        769: {
            items: 2,
        },
        992: {
            center: true,
            items: 3
        }
    }
})


// owl.owlcarousel2_filter

$('.owl-filter-bar').on('click', '.item', function (e) {
    var $items = $('.owl-filter-bar a')
    var $item = $(this);
    var filter = $item.data('owl-filter')
    $items.removeClass("active");
    $item.addClass("active");
    owl.owlcarousel2_filter(filter);

    e.preventDefault();
})
/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


  