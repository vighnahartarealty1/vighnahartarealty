import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  className = '',
  threshold = 0.08 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // If already in viewport on load, reveal immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 20 && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -25px 0px'
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const animationClass = isVisible ? 'is-visible' : '';
  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div 
      ref={elementRef}
      className={`scroll-reveal ${animation} ${animationClass} ${className}`}
      style={delayStyle}
      data-reveal={animation}
    >
      {children}
    </div>
  );
}

