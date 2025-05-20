import { useEffect, useState, useCallback } from 'react';

export const useVisibilityControl = ({ duration = 5000, escClosable = true } = {}) => {
  const [visible, setVisible] = useState(true);

  const hide = useCallback(() => {
    setVisible(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(hide, duration);
    return () => clearTimeout(timer);
  }, [hide, duration]);

  useEffect(() => {
    if (!escClosable) return;

    const onEsc = (e) => {
      if (e.key === 'Escape') {
        hide();
      }
    };

    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [hide, escClosable]);

  return { visible, hide };
};
