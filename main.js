// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

//pin gallery scroll animation
const container = document.querySelector('#menu');
const items = document.querySelectorAll('.category');
console.log(items)




gsap.utils.toArray('.category').forEach((catg,i)=>{
  ScrollTrigger.create({
    trigger:catg,
    start:'top top',
    pin: true,
    pinSpacing:false
  })
})
