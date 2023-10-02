document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("back-to-top-btn");
  
    window.onscroll = function () {
      scrollFunction();
    };
  
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    }
  
    btn.onclick = function () {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };
  });
  