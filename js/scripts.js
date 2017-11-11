(function() {
  "use strict";
  var clickDisabled = false;

  window.onload = function() {
    $(".subHeader").hide();
    $(".subHeader").css("font-size", "10vw");
    $("#container > img").hide();
    $("#heading").hide();
    $("#about").hide();
    setTimeout(appearance, 500);
    linkHover();
      aboutMeHover();
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
            $("#container h3").addClass("subHeaderShrink");
          }, i * 1000);
          setTimeout(function() {
            $("#container > img").fadeOut(500).slideDown(400);
            $("#about").fadeOut(500).slideDown(500);
            //$("#heading").fadeIn(1000);
            setTimeout(function() {
              $("#heading").fadeIn(500);
            }, 250);
          }, i * 1000 + 250);
        })(i);
      };
    };
  };

  function linkHover() {
    $("#githubIcon").hover(function() {
        hoverSyncOn("#aboutGitHub", "#githubIcon", "img/GitHub-Mark-32px.png");
      }, function() {
        hoverSyncOff("#aboutGitHub", "#githubIcon", "img/GitHub-Mark-Light-32px.png");
    });
    $("#linkedinIcon").hover(function() {
        hoverSyncOn("#aboutLinkedIn", "#linkedinIcon", "img/In-Black-14px.png");
      }, function() {
        hoverSyncOff("#aboutLinkedIn", "#linkedinIcon", "img/In-White-14px.png");
    });
    $("#pdfIcon").hover(function() {
        $("#pdfIcon > img").attr("src", "img/pdf-black.png");
      }, function() {
        $("#pdfIcon > img").attr("src", "img/pdf-white.png");
    });

    $("#aboutGitHub").hover(function() {
        hoverSyncOn("#aboutGitHub", "#githubIcon", "img/GitHub-Mark-32px.png");
      }, function() {
        hoverSyncOff("#aboutGitHub", "#githubIcon", "img/GitHub-Mark-Light-32px.png");
    });
    $("#aboutLinkedIn").hover(function() {
        hoverSyncOn("#aboutLinkedIn", "#linkedinIcon", "img/In-Black-14px.png");
      }, function() {
        hoverSyncOff("#aboutLinkedIn", "#linkedinIcon", "img/In-White-14px.png");
    });
  };

  function hoverSyncOn(about, icon, img) {
    $(about).css("color", "var(--body-color)");
    $("#nav .navContent > " + icon).attr("style", "color: var(--body-color) !important");
    $(icon + " > img").attr("src", img);
  }

  function hoverSyncOff(about, icon, img) {
    $(about).css("color", "var(--header-color)");
    $("#nav .navContent > " + icon).attr("style", "color: #FFF !important");
    $(icon + " > img").attr("src", img);
  }

  function aboutMeHover() {
    $("#about").on("click", function() {
      if (!clickDisabled) {
        clickDisabled = true;
        setTimeout(function() {
          clickDisabled = false;
        }, 500);
        if (!$("#aboutMeContainer").is(":visible")) {
          $("#aboutMeContainer").fadeOut(400).slideDown(300);
          $("#container > img").slideUp(300);
          $("#nav #about a").css("color", "#FFF");
          var aboutWidth = $("#nav #about a").width();
          $("#nav #about a").html("Close");
          $("#nav #about a").css("width", aboutWidth);
          var randNum = Math.floor(Math.random() * 5) + 1;
          $("#aboutMe > img").attr("src", "img/image" + randNum + ".jpg");
          var allAboutMeHeaders = $("#possibleHeaders li");
          var randNum2 = Math.floor(Math.random() * allAboutMeHeaders.length);
          $("#aboutMe h2").html(allAboutMeHeaders[randNum2].innerHTML);
        } else {
          $("#aboutMeContainer").fadeIn(400).slideUp(300);
          $("#container > img").slideDown(300);
          $("#nav #about a").css("color", "var(--body-color)");
          $("#nav #about a").html("About Me");
        }
      }
    });
  }
})();