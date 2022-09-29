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
    active: 2,
    collapsible: true,
    animate: 200,
  });
});
