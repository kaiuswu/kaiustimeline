
$(".swap-on-hover").hover(function() {
  console.log("hovering");
  // $(".swap-on-hover__front-image").css("display", "none");
  // $(".swap-on-hover__back-image").css("display", "inline");
  $(".swap-on-hover__front-image").toggle();
  $(".swap-on-hover__back-image").toggle();
});

$( function() {
  $( ".drag" ).draggable();
} );

$( function() {
  $( "#tabs" ).tabs({
      collapsible: true
    });
} );
