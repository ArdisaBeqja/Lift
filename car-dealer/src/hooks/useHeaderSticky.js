import { useState, useEffect } from 'react';

const useHeaderSticky = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 125) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    // Set up event listener on mount
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return [isSticky];
};

export default useHeaderSticky;
