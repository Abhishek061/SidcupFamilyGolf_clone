let crsr = document.querySelector("#cursor");
let flr = document.querySelector("#follower");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x - 12.5 + "px";
  crsr.style.top = dets.y - 12.5 + "px";
  flr.style.left = dets.x - 150 + "px";
  flr.style.top = dets.y - 150 + "px";
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  padding: "20 60",
  duration: 1,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 2,
  },
});
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -30%",
    end: "top -100%",
    scrub: 1,
  },
});

let h3all = document.querySelectorAll("#nav h3");
h3all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 4;
    crsr.style.border = "0.5px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "none";
    crsr.style.backgroundColor = "#95c11e";
    crsr.style.transition = "";
  });
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
