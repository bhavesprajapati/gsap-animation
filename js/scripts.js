gsap.registerPlugin(ScrollTrigger);

// Text animation
gsap.to(".text", {
    scrollTrigger: {
        trigger: ".grow__content",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out"
});

// Image animation
gsap.to(".image", {
    scrollTrigger: {
        trigger: ".grow__content",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    x: 0,
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: "power2.out"
});

// section grow end .....................................................

console.clear();

const imageUrls = [
    "images/section-2.jpg",
    "images/section-3.jpg",
    "images/section-5.jpg",
    "images/section-1.jpg"
];

const images = [];
const imgWrapper = document.querySelector(".bg-img-wrapper");
const panels = gsap.utils.toArray("section.panel");

panels.forEach((p, i) => {
    const img = document.createElement("img");
    img.setAttribute("src", imageUrls[i]);
    gsap.set(img, { zIndex: imageUrls.length - i });
    images.push(img);
    imgWrapper.appendChild(img);

    // ScrollTrigger without markers
    ScrollTrigger.create({
        trigger: p,
        start: "top center",
        end: "bottom center",
        onEnter: (self) => {
            images[i - 1] && gsap.to(images[i - 1], { opacity: 0, duration: 0.25 });
        },
        onEnterBack: (self) => {
            gsap.to(images[i], { opacity: 1, duration: 0.25 });
        },
        // markers removed
        id: i + 1
    });

});

$(window).on('scroll', function() {
    if ($(this).scrollTop() > 10) {
        $('.site-header').addClass('sticky');
    } else {
        $('.site-header').removeClass('sticky');
    }
});