const pushinConfig = {
  target: document.querySelector(".pushin"),
  debug: true,
  scene: {
    breakpoints: [768, 1440, 1920, 2560],

    inpoints: [200, 300],
    ratio: [1, 2],
  },
  layers: [],
};

$(document).ready(function () {
  pushInStart(pushinConfig);
  window.addEventListener("scroll", (event) => {});

  animDelay = 0;
  $("#help li").each(function () {
    $(this).css("animation-delay", animDelay + "ms");
    animDelay = animDelay + 100;
  });

  $(".accordion").accordion({
    active: true,
    //collapsible: true,
    animate: 500,
    heightStyle: "content",
  });
  /*Hack to make only one accordion open at a time
THIS SHOULD BE CHANGED. IT IS NOT TOGGLING ARIA ATTRIBUTES SO IT IS VERY BAD FOR ACCESSIBILITY
*/
  $(".accordion").click(function () {
    $(".accordion").each(function () {
      // On click make every accorion hidden
      $(".ui-accordion-header").removeClass("ui-state-active");
      $(".ui-accordion-header").removeClass("ui-accordion-header-active");
      $(".ui-accordion-content").removeClass("ui-accordion-content-active");
      $(".ui-accordion-content").css("display", "none");
    });
    //Then turn back on only the current one
    var currentHeader = $(this).find(".ui-accordion-header")[0];
    var currentContent = $(this).find(".ui-accordion-content")[0];

    $(currentHeader).addClass("ui-state-active");
    $(currentHeader).addClass("ui-accordion-header-active");
    $(currentContent).addClass("ui-accordion-content-active");
    $(currentContent).css("display", "block");
  });
});
