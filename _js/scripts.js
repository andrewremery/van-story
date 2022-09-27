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

  $(".accordion").accordion({
    active: 2,
    collapsible: true,
    animate: 200,
  });
});
