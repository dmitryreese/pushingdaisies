const createObserver = () => {
  let ObserverInstance = null;

  return () => {
    if (ObserverInstance === null) {
      ObserverInstance = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.src;
            image.srcset = image.dataset.srcset;
            ObserverInstance.unobserve(image);
          }
        });
      });
    }

    return ObserverInstance;
  };
};

const Observer = createObserver();

export default Observer;
