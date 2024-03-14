var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});


gsap.to("#nav",{
    backgroundColor: "#000000f5",
    duration: 0.5,
    height: "14vh",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -20%",
        end: "top -20%",
        scrub: 1,
    },
})
  
gsap.to("#main", {
    backgroundColor: "#0b0b0b",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
});