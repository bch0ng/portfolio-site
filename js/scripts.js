(function() {
  window.onload = function() {
    $(".subHeader").hide();
    $(".subHeader").css("font-size", "10vw");
    $("#myPicture > img").hide();
    setTimeout(appearance, 500);
  };

  function appearance() {
    //debugger;
    for(var i = 0; i < 4; i++) {
      if (i < 3) {
        (function(i) {
          setTimeout(function() {
            $(".subHeader").eq(i).fadeOut(500).slideDown(500);
          }, i * 1000);
        })(i);
      } else {
        (function(i) {
          setTimeout(function() {
            $("#myPicture h3").addClass("subHeaderShrink");
          }, i * 1000);
          setTimeout(function() {
            $("#myPicture > img").fadeOut(500).slideDown(400);
          }, i * 1000 + 250);
        })(i);
      };
    };
  };

  function removingClass(className, index, classToRemove) {
    $(className).eq(index).removeClass(classToRemove);
  };


})();