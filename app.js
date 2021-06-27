const imagesWrapper = document.querySelectorAll(".testimony-img");
const images = document.querySelectorAll(".testimony-images");
const testimonyHeaders = document.querySelectorAll(".testimony-header");
const info = document.querySelectorAll(".info");
const outroHeader = document.querySelector(".outro-hOne");

const animateImgWrapper = () => {
  let options = {
    rootMargin: "-45%",
    treshold: 0.0,
  };

  let observer = new IntersectionObserver(showItem, options);

  function showItem(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active-img-wrapper");
      }
    });
  }

  imagesWrapper.forEach((item) => {
    observer.observe(item);
  });
};

const animateImg = () => {
  let options = {
    rootMargin: "-45%",
    treshold: 1.5,
  };

  let observer = new IntersectionObserver(showItem, options);

  function showItem(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active-img");
      }
    });
  }

  images.forEach((item) => {
    observer.observe(item);
  });
};

const animateTestimonyHeaders = () => {
  let optionsHeaders = {
    rootMargin: "-25%",
    treshold: 0.0,
  };

  let observer = new IntersectionObserver(showItem, optionsHeaders);

  function showItem(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active-testimony-header");
      }
    });
  }

  testimonyHeaders.forEach((item) => {
    observer.observe(item);
  });
};

const animateInfo = () => {
  let optionsInfo = {
    rootMargin: "-30%",
    treshold: 0.0,
  };

  let observer = new IntersectionObserver(showItem, optionsInfo);

  function showItem(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active-info");
      }
    });
  }

  info.forEach((item) => {
    observer.observe(item);
  });
};

const animateOutroHeader = () => {
  let optionsOutroHeader = {
    rootMargin: "-25%",
    treshold: 0.0,
  };

  let observer = new IntersectionObserver(showItem, optionsOutroHeader);

  function showItem(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active-header");
      }
    });
  }

  observer.observe(outroHeader);
};

animateImgWrapper();
animateImg();
animateTestimonyHeaders();
animateInfo();
animateOutroHeader();
