import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export function useNavigationHelpers() {
  const navigate = useNavigate();

  const goBack = useCallback(() => navigate(-1), [navigate]);
  const goHome = useCallback(() => navigate('/'), [navigate]);
  const goSigin = useCallback(() => navigate('/signin'), [navigate]);

  return { goBack, goHome, goSigin };
}
