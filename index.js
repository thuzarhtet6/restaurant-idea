window.onscroll = function () {
    myFunction();
  };
  
  var nav_box = document.getElementsByClassName("nav_box")[0];
  var nav_list = document.getElementsByClassName("nav_list")[0];
  var logo = document.getElementsByClassName("logo")[0];
  var sticky = nav_box.offsetHeight;
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      nav_box.classList.add("sticky");
  
      nav_box.classList.remove("nav_transparent");
      nav_box.classList.add("nav_black");
      nav_list.classList.add("nav_margin");
      logo.classList.add("nav_margin_1");
    } else {
      nav_box.classList.remove("sticky");
      nav_box.classList.remove("nav_black");
      nav_box.classList.add("nav_transparent");
      nav_list.classList.remove("nav_margin");
      logo.classList.remove("nav_margin_1");
    }
  }
  
  function menu(menutype) {
    var i;
    var x = document.getElementsByClassName("mealtype");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(menutype).style.display = "block";
  }
  
  // $(".owl-carousel").owlCarousel({
  //   loop: false,
  //   margin: 10,
  //   nav: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     1000: {
  //       items: 1,
  //     },
  //   },
  // });
  
  $(".owl-carousel").owlCarousel({
    dots:true,
    items:1
  })
  $(document).ready(function () {
    $(".gallery").magnificPopup({
      delegate: "a",
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  });
  