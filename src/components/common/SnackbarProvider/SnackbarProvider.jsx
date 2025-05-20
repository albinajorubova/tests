import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import s from './SnackbarProvider.module.scss';

const SnackbarContext = createContext();

export const useSnackbar = () => useContext(SnackbarContext);

export const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({ message: '', visible: false, type: 'info' });
  const [show, setShow] = useState(true);

  const showSnackbar = useCallback((message, type = 'info') => {
    setSnackbar({ message, visible: true, type });
    setShow(true);
  }, []);

  const hideSnackbar = useCallback(() => {
    setShow(false);
    setTimeout(() => {
      setSnackbar((s) => ({ ...s, visible: false }));
    }, 300);
  }, []);

  useEffect(() => {
    if (snackbar.visible) {
      const timer = setTimeout(() => {
        hideSnackbar();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [snackbar.visible, hideSnackbar]);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {snackbar.visible && (
        <div
          className={`${s.snackbar} ${s[snackbar.type]} ${show ? s.show : ''}`}
          onClick={hideSnackbar}
        >
          <span className={s.snackbarMessage}>{snackbar.message}</span>
          <button
            onClick={hideSnackbar}
            className={s.closeButton}
            aria-label="Закрыть уведомление"
          >
            ×
          </button>
        </div>
      )}
    </SnackbarContext.Provider>
  );
};

export default React.memo(SnackbarProvider);
