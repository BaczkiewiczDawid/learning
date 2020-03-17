const tl = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.fromTo(".sectionTitle", 1, {y: 80, opacity: 0}, {y: 0, opacity: 1});
tl.fromTo(".sectionParagraph", 1, {y: 80, opacity: 0}, {y: 0, opacity: 1});
tl.fromTo(".sectionImg", 1, {y: 80, opacity: 0}, {y: 0, opacity: 1}, 1.5);

let scene = new ScrollMagic.Scene({
    triggerElement: "section",
})

.setTween(tl).addTo(controller);

const tla = new TimelineMax();

tla.fromTo(".contentTitle", 1, {y: 80, opacity: 0}, {y: 0, opacity: 1});
tla.fromTo(".contentParagraphOne", 1, {y: 80, opacity: 0}, {y: 0, opacity: 1});
tla.fromTo(".contentImg", 1, {y: 80, opacity: 0}, {y: 0, opacity: 1});
tla.fromTo(".contentParagraphTwo", 1, {y: 80, opacity: 0}, {y: 0, opacity: 1});

let sceneTwo = new ScrollMagic.Scene({
    triggerElement: "content",
})

.setTween(tla).addTo(controller);

const fatherhood = document.querySelector(".fatherhood");
const talking = document.querySelector(".talking");

fatherhood.addEventListener("click", () => {
    gsap.to(window, {duration: 1.5, scrollTo: "section", ease: Power4.easeOut});
});
talking.addEventListener("click", () => {
    gsap.to(window, {duration: 2.5, scrollTo: "content" ,ease: Power4.easeOut});
});