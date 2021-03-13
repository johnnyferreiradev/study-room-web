import React, { useState, useEffect, useRef } from 'react';

import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';

import StyledCarousel from './styles';

const getWidth = (elem) => (elem ? elem.offsetWidth : window.innerWidth);

const Carousel = ({
  slides,
  customWidth,
  height,
  autoPlay,
}) => {
  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();
  const containerRef = useRef();

  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: null,
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide],
  });

  const {
    activeSlide,
    translate,
    _slides,
    transition,
  } = state;

  const handleResize = () => {
    setState({ ...state, translate: getWidth(containerRef.current), transition: 0 });
  };

  const smoothTransition = () => {
    let currentSlides = [];

    if (activeSlide === slides.length - 1) {
      currentSlides = [
        slides[slides.length - 2],
        lastSlide,
        firstSlide,
      ];
    } else if (activeSlide === 0) {
      currentSlides = [lastSlide, firstSlide, secondSlide];
    } else {
      currentSlides = slides.slice(activeSlide - 1, activeSlide + 2);
    }

    setState({
      ...state,
      _slides: currentSlides,
      transition: 0,
      translate: getWidth(containerRef.current),
    });
  };

  const nextSlide = () => setState({
    ...state,
    translate: translate + getWidth(containerRef.current),
    activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
  });

  const prevSlide = () => setState({
    ...state,
    translate: 0,
    activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
  });

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const smooth = (e) => {
      if (e.target.className.includes('SliderContent')) {
        transitionRef.current();
      }
    };

    const resize = () => {
      resizeRef.current();
    };

    const transitionEnd = window.addEventListener('transitionend', smooth);
    const onResize = window.addEventListener('resize', resize);

    let interval = null;

    if (autoPlay) {
      interval = setInterval(play, autoPlay * 1000);
    }

    return () => {
      window.removeEventListener('transitionend', transitionEnd);
      window.removeEventListener('resize', onResize);

      if (autoPlay) {
        clearInterval(interval);
      }
    };
  }, [autoPlay]);

  useEffect(() => {
    if (transition === 0) setState((prevState) => ({ ...prevState, transition: 0.45 }));
  }, [transition]);

  return (
    <StyledCarousel ref={containerRef} width={customWidth || '100%'} height={height || 'max-content'}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth(containerRef.current) * _slides.length}
      >
        {_slides.map((_slide) => (
          <>
            <Slide width={`${getWidth(containerRef.current)}`} key={_slide.key} content={_slide.content} />
          </>
        ))}
      </SliderContent>

      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />

      <Dots slides={slides} activeSlide={activeSlide} />
    </StyledCarousel>
  );
};

export default Carousel;
