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
tla.fromTo(".contentParagraphTwo", 1, {y: 80, opacity: 0}, {y: 0, opacity: 1});
tla.fromTo(".contentImg", 1, {y: 80, opacity: 0}, {y: 0, opacity: 1});