import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string,
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);

  const onShowLogin = useCallback(() => {
    setIsLoginOpen(true);
  }, []);

  const onCloseLogin = useCallback(() => {
    setIsLoginOpen(false);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logOut());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <Button
          onClick={onLogout}
          theme={ButtonTheme.BACKGROUND_INVERTED}
          className={cls.links}
        >
          {t('login.logout-btn')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        onClick={onShowLogin}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        className={cls.links}
      >
        {t('login.login-btn')}
      </Button>
      {isLoginOpen && (
      <LoginModal
        onClose={onCloseLogin}
        isOpen={isLoginOpen}
      />
      )}
    </div>
  );
});
