import { useEffect } from 'react';

const useOutsideEvent = (ref, onAction) => {
  useEffect(() => {
    let isMounted = true;

    function handleClickOutside(event) {
      if (isMounted) {
        if (ref.current && !ref.current.contains(event.target)) {
          onAction();
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      isMounted = false;
    };
  }, [ref, onAction]);
};

export default useOutsideEvent;
