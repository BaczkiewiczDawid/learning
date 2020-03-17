const tl = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.fromTo(".sectionTitle", 1, {y: 80, opacity: 0}, {y: 0, opacity: 1});

let scene = new ScrollMagic.Scene({
    triggerElement: ".sectionParagraph",
})

.setTween(tl).addTo(controller);