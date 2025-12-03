import { useRef, useCallback } from 'react';

export function useSectionScroll() {
  const sectionRefs = useRef(new Map());

  const registerSection = useCallback((name, element) => {
    if (element) {
      sectionRefs.current.set(name, element);
    } else {
      sectionRefs.current.delete(name);
    }
  }, []);

  const scrollToSection = useCallback((name, options = {}) => {
    const element = sectionRefs.current.get(name);
    if (element) {
      const offset = options.offset || 80; // Default offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
        ...options
      });

      // Update URL hash without triggering scroll
      const newUrl = `${window.location.pathname}#${name}`;
      window.history.replaceState(null, '', newUrl);
    }
  }, []);

  // New method to handle hash on page load
  const handleHashScroll = useCallback((hash) => {
    if (hash && hash.startsWith('#')) {
      const sectionName = hash.substring(1); // Remove the #
      setTimeout(() => {
        scrollToSection(sectionName, { offset: -10 });
      }, 100);
    }
  }, [scrollToSection]);

  return { registerSection, scrollToSection, handleHashScroll };
}