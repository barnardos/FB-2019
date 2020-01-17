$(document).ready(function() {
  $(".Header-trigger-cross").hide();
  $(".Header-target").hide();
  $(".Header-trigger-burger").click(function() {
    $(".Header-target").slideToggle("slow", function() {
      $(".Header-trigger-burger").hide();
      $(".Header-trigger-cross").show();
    });
  });

  $(".Header-trigger-cross").click(function() {
    $(".Header-target").slideToggle("slow", function() {
      $(".Header-trigger-cross").hide();
      $(".Header-trigger-burger").show();
    });
  });
});
