$(document).ready(function () {

  $(".home-top-wrap").delay(500).fadeIn(800);
  $(".middle-row").delay(500).fadeIn(800);
  $(".focus-logo-wrap").delay(500).fadeIn(800);

  //  $(".top-row .top_animation").delay(2200).fadeIn(1500);
  $(".bottom-row").delay(1500).fadeIn(800);

  setTimeout(
    function alertFunc() {
      //do something special
      $(".top-row .top_animation").css("visibility", "visible");
      $(".top-row .top_animation").css("opacity", "0.2");
    }, 1800);

  $(".focus-logo-wrap").delay(500).fadeIn(800);
  $(".focus-middle").delay(800).fadeIn(800);
  $(".focus-middle-wrap .top_animation").delay(1200).fadeIn(800);

  $(".bottom-row").delay(1500).fadeIn(800);
  

  var toggle = true;
  setInterval(function () {
    var d = new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' });
    var parts = d.split(":");
    $('#hours').text(parts[0]);
    $('#minutes').text(parts[1]);
    $("#colon").css({ visibility: toggle ? "visible" : "hidden" });
    toggle = !toggle;
  }, 1000);

/*

  $("#go_focus").click(function () {

    $("#mainNav").hide();
    $("#notifyNav").show();

    $(".home-top-wrap").fadeOut();
    $(".middle-row").fadeOut();
    $("#go_focus").fadeOut();
    $(".top-row .top_animation").css("visibility", "hidden");
    $(".top-row .top_animation").css("opacity", "0");
   

    $(".focus-logo-wrap").delay(100).fadeIn(800);
    $(".focus-middle").delay(500).fadeIn(800);
    $("#go_home").delay(500).fadeIn(800);
    $(".focus-middle-wrap .top_animation").delay(1500).fadeIn(800);
    $(".bottom-row").delay(1000).fadeIn(800);

  });

  $("#go_home").click(function () {

    $("#mainNav").show();
    $("#notifyNav").hide();

    $(".focus-middle").fadeOut();
    $(".focus-middle-wrap .top_animation").fadeOut();
    $("#go_home").fadeOut();

    $(".home-top-wrap").delay(500).fadeIn(800);
    $(".middle-row").delay(500).fadeIn(800);
    $("#go_focus").delay(500).fadeIn(800);
    $(".bottom-row").delay(1500).fadeIn(800);

    setTimeout(
      function alertFunc() {
        //do something special
        $(".top-row .top_animation").css("visibility", "visible");
        $(".top-row .top_animation").css("opacity", "0.4");
      }, 1800);
  });

*/

});


