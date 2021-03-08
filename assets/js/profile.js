// PROFILE CLICK

$("#btn_profile").on("click", function () {
  $("#purchases").fadeOut();
  $("#profile").fadeIn();
});

// PURCHASES CLICK

$("#btn_purchases").on("click", function () {
  $("#profile").fadeOut();
  $("#purchases").fadeIn();
});
