// PROFILE CLICK

$("#btn_profile").on("click", function () {
  // hide immediately.
  $("#purchases").css("display", "none");

  // show immediately.
  $("#profile").css("display", "initial");

  // $("#purchases").fadeOut();
  // $("#profile").fadeIn();
});

// PURCHASES CLICK

$("#btn_purchases").on("click", function () {
  // hide immediately.
  $("#profile").css("display", "none");

  // show immediately.
  $("#purchases").css("display", "initial");

  // $("#profile").fadeOut();
  // $("#purchases").fadeIn();
});
