import gsap from "gsap";

// OPEN MENU
export const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 0.8,
    height: 0,
    transformOrigin: "right top",
    skewY: 2,
    ease: "power3.inOut",
    stagger: {
      amount: 0.1,
    },
  });
};

// CLOSE MENU
export const staggerRevealClose = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    height: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.07,
    },
  });
};

// STAGGER THE LINKS TO APPEAR
export const staggerText = (node1, node2, node3) => {
  gsap.from([node1, node2, node3], {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3,
    },
  });
};

// Fade up for the additonal info on our menu
export const fadeInUp = (node) => {
  gsap.from(node, {
    y: 60,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: "power3.inOut",
  });
};

// Hover on the link
export const handleHover = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    x: -5,
    // skewX: 4,
    ease: "power1.inOut",
  });
};

// Hover off the link
export const handleHoverExit = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    x: 5,
    // skewX: 0,
    ease: "power1.inOut",
  });
};

//CURRENTLY BEING USED

export const fadeIn = (node) => {
  gsap.from(node, {
    duration: 3,
    delay: 0,
    opacity: 0,
    ease: "power1.inOut",
  });
};

export const classFadeUp = (node) => {
  gsap.from(node, {
    duration: 1,
    y: 200,
    delay: 0.5,
    opacity: 0,
    ease: "circ.out",
    stagger: {
      amount: 0.3,
    },
  });
};

export const classFadeDown = (node) => {
  gsap.from(node, {
    duration: 1,
    y: -200,
    delay: 0.5,
    opacity: 0,
    ease: "circ.out",
    stagger: {
      amount: 0.3,
    },
  });
};

export const nodeFadeUp = (node1, node2, node3, node4) => {
  gsap.from([node1, node2, node3, node4], {
    duration: 1,
    y: 200,
    delay: 0.5,
    opacity: 0,
    ease: "circ.out",
    stagger: {
      amount: 0.3,
    },
  });
};

export const nodeFadeDown = (node1, node2, node3, node4) => {
  gsap.from([node1, node2, node3, node4], {
    duration: 1,
    y: -200,
    delay: 0.5,
    opacity: 0,
    ease: "circ.out",
    stagger: {
      amount: 0.3,
    },
  });
};

export const staggerIcons = (node1, node2, node3, node4) => {
  gsap.from([node1, node2, node3, node4], {
    duration: 1,
    x: 100,
    delay: 1.5,
    opacity: 0,
    ease: "circ.out",
    stagger: {
      amount: 1,
    },
  });
};
