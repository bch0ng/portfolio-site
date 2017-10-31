(function() {
  window.onload = function() {
    $(".subHeader").hide();
    $(".subHeader").css("font-size", "10vw");
    $("#myPicture > img").hide();
    setTimeout(appearance, 500);
    linkHover();
  };

  function appearance() {
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

  function linkHover() {
    $("#githubIcon").hover(function() {
      $("#githubIcon > img").attr("src", "img/GitHub-Mark-32px.png");
      }, function() {
      $("#githubIcon > img").attr("src", "img/GitHub-Mark-Light-32px.png");
    });
    $("#linkedinIcon").hover(function() {
      $("#linkedinIcon > img").attr("src", "img/In-Black-14px.png");
      }, function() {
      $("#linkedinIcon > img").attr("src", "img/In-White-14px.png");
    });
    // PDF icon
    $("#pdfIcon").hover(function() {
      $("#pdfIcon > img").attr("src", "img/In-Black-14px.png");
      }, function() {
      $("#pdfIcon > img").attr("src", "img/In-White-14px.png");
    });
  };

})();