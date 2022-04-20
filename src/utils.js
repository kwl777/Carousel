export default {
   getSlideStyle: spec => {
        let style = {};
        if (spec.variableWidth === undefined || spec.variableWidth === false) {
          style.width = spec.slideWidth;
        }
      
        if (spec.fade) {
          style.position = "relative";
          style.left = -spec.index * parseInt(spec.slideWidth);
          style.opacity = spec.currentSlide === spec.index ? 1 : 0;
          style.transition =
              "opacity " +
              spec.speed +
              "ms " +
              spec.cssEase +
              ", " +
              "visibility " +
              spec.speed +
              "ms " +
              spec.cssEase;
        }
      
        return style;
    },
    getSlideClasses: spec => {
        let slickActive, slickCenter, slickCloned;
        let index = spec.index;

        slickCloned = index < 0 || index >= spec.slideCount;

        slickActive =
        spec.currentSlide <= index &&
        index < spec.currentSlide + spec.slidesToShow;

        let focusedSlide;
        if (spec.targetSlide < 0) {
          focusedSlide = spec.targetSlide + spec.slideCount;
        } else if (spec.targetSlide >= spec.slideCount) {
          focusedSlide = spec.targetSlide - spec.slideCount;
        } else {
          focusedSlide = spec.targetSlide;
        }
        let slickCurrent = index === focusedSlide;
        return {
          "carouser-slide": true,
          "carouser-active": slickActive,
          "carouser-center": slickCenter,
          "carouser-cloned": slickCloned,
          "carouser-current": slickCurrent // dubious in case of RTL
        };

    }
}