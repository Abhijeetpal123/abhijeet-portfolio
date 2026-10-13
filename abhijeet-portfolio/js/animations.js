(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);
  const revealItems = gsap.utils.toArray(".reveal");
  gsap.set(revealItems, { y: 18 });
  revealItems.forEach((item) => {
    gsap.to(item, {
      y: 0,
      duration: 0.75,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 88%",
        once: true
      }
    });
  });

  gsap.from(".art-card", { y: 18, rotate: -1, duration: 1.05, ease: "power3.out", delay: 0.15 });
  gsap.to(".floating-tag", {
    y: -7,
    duration: 2.3,
    stagger: 0.22,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
})();