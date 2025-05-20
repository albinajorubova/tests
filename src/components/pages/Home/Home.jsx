import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import s from './Home.module.scss';
import Button from '../../common/Button/Button';
import { useAuthUser } from "../../../hooks/useAuthUser";
import { selectAuth } from '../../../store/auth/slice';
import { useNavigationHelpers } from '../../../hooks/useBackButton';
import { useSnackbar } from '../../common/SnackbarProvider/SnackbarProvider';

const Home = () => {
  const { logOut, fetchUser } = useAuthUser();
  const { loading, error, user } = useSelector(selectAuth);
  const { goSigin } = useNavigationHelpers();
  const { showSnackbar } = useSnackbar();

  const handleLogout = async () => {
    await logOut(); 
    if (!error & !loading) {
      goSigin();
    } else {
      showSnackbar("Упс, что-то пошло не так", "error");
    }
  };

  const handleGetUser = async () => {
    await fetchUser(); 
  };
  

  useEffect(() => {
    if (!loading && !error && user) {
      console.log(user);
    } else if (!loading && error) {
      showSnackbar("Упс, что-то пошло не так", "error");
    }
  }, [user, loading, error, showSnackbar]);
  

  return (
    <div className={s.root}>
      <a href="/signin">Войти</a>
      <Button
        value="Выход"
        className={s.button}
        onClick={handleLogout}
        type="button"
        loading={loading}
      />
      <Button
        value="Пользователь"
        className={s.button}
        onClick={handleGetUser}
        type="button"
        loading={loading}
      />
    </div>
  );
};

export default React.memo(Home);
