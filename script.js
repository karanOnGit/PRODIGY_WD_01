var timeline = gsap.timeline();

timeline.from(".navbar", {
  y: -20,
//   x: -20,
  delay: 0.3,
  duration: 1,
  opacity: 0,
});

timeline.from("li", {
  y: -30,
  duration: 0.9,
  ease: "ease-in-out",
  opacity: 0,
  stagger: 0.3,
});

timeline.from(".box div", {
  scale: 0,
  duration: 1,
  x: -250,
  ease: "circ.inOut",
  //   y: -300,
  opacity: 0.3,
  stagger: 0.3,
});

function icon() {
  var select = document.querySelector("ul");
  if (select.style.display === "block") {
    select.style.display = "none";
  } else {
    select.style.display = "block";
  }
}
