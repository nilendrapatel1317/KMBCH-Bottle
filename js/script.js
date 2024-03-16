function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

// Custom cursor ==================================================================
let mouseCursor = document.querySelector(".cursor");
let btn = document.querySelectorAll("button");

window.addEventListener("mousemove", cursor);

function cursor(cursorPointer) {
  gsap.to(mouseCursor, 0.4, {
    x: cursorPointer.clientX,
    y: cursorPointer.clientY,
  });
}

//------------------------------------------------------------------------------------
// Loader

function loader() {
  document.addEventListener("readystatechange", function () {
    if (document.readyState === "complete") {
      gsap.to(".loader-img", {
        opacity: 0,
        duration: 0.5,
      });
      gsap.to(".loader", {
        height: "0%",
        delay: 0.5,
        ease: "easeInOut",
      });
    }
  });
}
loader();

gsap.from(".p0-wrapper .text-effect", {
  x:100,
  delay:0.7,
  duration:1,
  stagger:0.1,
  opacity:0
})

// -----------------------------------------------------------------------------------------------

function canvas1() {
  const canvas = document.querySelector("#page1 canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
      ./images/img-1.png
      ./images/img-2.png
      ./images/img-3.png
      ./images/img-4.png
      ./images/img-5.png
      ./images/img-6.png
      ./images/img-7.png
      ./images/img-8.png
      ./images/img-9.png
      ./images/img-10.png
      ./images/img-11.png
      ./images/img-12.png
      ./images/img-13.png
      ./images/img-14.png
      ./images/img-15.png
      ./images/img-16.png
      ./images/img-17.png
      ./images/img-18.png
      ./images/img-19.png
      ./images/img-20.png
      ./images/img-21.png
      ./images/img-22.png
      ./images/img-23.png
      ./images/img-24.png
      ./images/img-25.png
      ./images/img-26.png
      ./images/img-27.png
      ./images/img-28.png
      ./images/img-29.png
      ./images/img-30.png
      ./images/img-31.png
      ./images/img-32.png
      ./images/img-33.png
      ./images/img-34.png
      ./images/img-35.png
      ./images/img-36.png
      ./images/img-37.png
      ./images/img-38.png
      ./images/img-39.png
      ./images/img-40.png
      ./images/img-41.png
      ./images/img-42.png
      ./images/img-43.png
      ./images/img-44.png
      ./images/img-45.png
      ./images/img-46.png
      ./images/img-47.png
      ./images/img-48.png
      ./images/img-49.png
      ./images/img-50.png
      ./images/img-51.png
      ./images/img-52.png
      ./images/img-53.png
      ./images/img-54.png
      ./images/img-55.png
      ./images/img-56.png
      ./images/img-57.png
      ./images/img-58.png
      ./images/img-59.png
      ./images/img-60.png
      ./images/img-61.png
      ./images/img-62.png
      ./images/img-63.png
      ./images/img-64.png
      ./images/img-65.png
      ./images/img-66.png
      ./images/img-67.png
      ./images/img-68.png
      ./images/img-69.png
      ./images/img-70.png
      ./images/img-71.png
      ./images/img-72.png
      ./images/img-73.png
      ./images/img-74.png
      ./images/img-75.png
      ./images/img-76.png
      ./images/img-77.png
      ./images/img-78.png
      ./images/img-79.png
      ./images/img-80.png
      ./images/img-81.png
      ./images/img-82.png
      ./images/img-83.png
      ./images/img-84.png
      ./images/img-85.png
      ./images/img-86.png
      ./images/img-87.png
      ./images/img-88.png
      ./images/img-89.png
      ./images/img-90.png
      ./images/img-91.png
      ./images/img-92.png
      ./images/img-93.png
      ./images/img-94.png
      ./images/img-95.png
      ./images/img-96.png
      ./images/img-97.png
      ./images/img-98.png
      ./images/img-99.png
      ./images/img-100.png
      ./images/img-101.png
      ./images/img-102.png
      ./images/img-103.png
      ./images/img-104.png
      ./images/img-105.png
      ./images/img-106.png
      ./images/img-107.png
      ./images/img-108.png
      ./images/img-109.png
      ./images/img-110.png
      ./images/img-111.png
      ./images/img-112.png
      ./images/img-113.png
      ./images/img-114.png
      ./images/img-115.png
      ./images/img-116.png
      ./images/img-117.png
      ./images/img-118.png
      ./images/img-119.png
      ./images/img-120.png
      ./images/img-121.png
      ./images/img-122.png
      ./images/img-123.png
      ./images/img-124.png
      ./images/img-125.png
      ./images/img-126.png
      ./images/img-127.png
  `;
    return data.split("\n")[index];
  }

  const frameCount = 127;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page1>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width - 100;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  gsap.to("#page1 canvas", {
    x: 170,
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page1 canvas",
      start: "400% bottom",
      end: "600% 60%",
      scrub: true,
      // markers:true,
      // pin:true
    },
  });
  gsap.to("#page1 canvas", {
    opacity: 0,
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page1 canvas",
      start: "700% bottom",
      end: "700% top",
      scrub: true,
      // markers:true,
      // pin:true
    },
  });

  ScrollTrigger.create({
    trigger: "#page1>canvas",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `700% top`,
    // markers:true,
  });
}

canvas1();

function canvas2() {
  const canvas = document.querySelector("#page2 canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
      ./images/img-page-1.png
      ./images/img-page-2.png
      ./images/img-page-3.png
      ./images/img-page-4.png
      ./images/img-page-5.png
      ./images/img-page-6.png
      ./images/img-page-7.png
      ./images/img-page-8.png
      ./images/img-page-9.png
      ./images/img-page-10.png
      ./images/img-page-11.png
      ./images/img-page-12.png
      ./images/img-page-13.png
      ./images/img-page-14.png
      ./images/img-page-15.png
      ./images/img-page-16.png
      ./images/img-page-17.png
      ./images/img-page-18.png
      ./images/img-page-19.png
      ./images/img-page-20.png
      ./images/img-page-21.png
      ./images/img-page-22.png
      ./images/img-page-23.png
      ./images/img-page-24.png
      ./images/img-page-25.png
      ./images/img-page-26.png
      ./images/img-page-27.png
      ./images/img-page-28.png
      ./images/img-page-29.png
      ./images/img-page-30.png
      ./images/img-page-31.png
      ./images/img-page-32.png
      ./images/img-page-33.png
      ./images/img-page-34.png
      ./images/img-page-35.png
      ./images/img-page-36.png
      ./images/img-page-37.png
      ./images/img-page-38.png
      ./images/img-page-39.png
      ./images/img-page-40.png
      ./images/img-page-41.png
      ./images/img-page-42.png
      ./images/img-page-43.png
      ./images/img-page-44.png
      ./images/img-page-45.png
      ./images/img-page-46.png
      ./images/img-page-47.png
      ./images/img-page-48.png
      ./images/img-page-49.png
      ./images/img-page-50.png
  `;
    return data.split("\n")[index];
  }

  const frameCount = 50;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page2>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width - 100;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  ScrollTrigger.create({
    trigger: "#page2>canvas",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `700% top`,
    // markers:true,
  });
}
canvas2();

// ==================================================================================================
// ==================================================================================================
gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `30% 90%`,
    end: `40% top`,
    scroller: `#main`,
    // markers:true,
    scrub: true,
  },

  backgroundColor: "#FFD7D7",
  duration: 3,
});

function page1BgColor() {
  var page1 = document.querySelector("#page1");
  if (page1.style.height < "40%") {
    page1.style.backgroundColor = "#FFD7D7";
  }
}
// page1BgColor()

gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `60% 90%`,
    end: `80% top`,
    scroller: `#main`,
    // markers:true,
    scrub: true,
  },

  backgroundColor: "#FFF9C2",
  duration: 3,
});

function page1OverlayBox1() {
  ScrollTrigger.create({
    trigger: "#page1 .box-1",
    scroller: `#main`,
    start: "top top",
    end: "100% 0 ",
    pin: true,
    // markers:true
  });

  gsap.to(".box-1 .disapper", {
    scrollTrigger: {
      trigger: ".box-1 .disapper",
      scroller: `#main`,
      start: "190% top",
      end: "190% -130%",
      scrub: true,
      // markers: true,
    },
    opacity: 0,
    duration: 10,
  });
}
page1OverlayBox1();

function page1OverlayBox2() {
  ScrollTrigger.create({
    trigger: "#page1 .box-2",
    scroller: `#main`,
    start: "top top",
    end: "100% -110%",
    pin: true,
    // markers: true,
  });

  gsap.to(".box-2 .disapper", {
    scrollTrigger: {
      trigger: ".box-2 ",
      scroller: `#main`,
      start: "5% top",
      end: "25% top",
      scrub: true,
      // markers: true,
    },
    opacity: 0,
    duration: 10,
  });
}
page1OverlayBox2();

function page1OverlayBox3() {
  ScrollTrigger.create({
    trigger: "#page1 .box-3",
    scroller: `#main`,
    start: "top top",
    end: "100% -200% ",
    pin: true,
    // markers: true,
  });

  gsap.to(".box-3 .disapper", {
    scrollTrigger: {
      trigger: ".box-3 .disapper",
      scroller: `#main`,
      start: "190% top",
      end: "190% -130%",
      scrub: true,
      // markers: true,
    },
    opacity: 0,
    duration: 10,
  });
}
page1OverlayBox3();




gsap.to("#page5", {
  scrollTrigger: {
    trigger: `#page5`,
    start: `60% 90%`,
    end: `80% top`,
    scroller: `#main`,
    // markers:true,
    scrub: true,
  },

  backgroundColor: "#F0E6D9",
  duration: 3,
});

gsap.from("#page5 .container .down", {
  y: -3600,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page5 .container ",
    scroller: `#main`,
    start: `top 100%`,
    end: `100% bottom`,
    scrub: true,
    // markers: true,
  },
});

gsap.from("#page5 .container .up", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#page5 .container",
    scroller: `#main`,
    start: `top 100%`,
    end: `100% bottom`,
    scrub: true,
    // markers:true
  }
})


// ============================================================================================
// ============================================================================================
