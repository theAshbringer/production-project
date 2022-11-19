import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const onShowLogin = useCallback(() => {
    setIsLoginOpen(true);
  }, []);

  const onCloseLogin = useCallback(() => {
    setIsLoginOpen(false);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        onClick={onShowLogin}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        className={cls.links}
      >
        {t('login.login-btn')}
      </Button>
      <LoginModal
        onClose={onCloseLogin}
        isOpen={isLoginOpen}
      />
    </div>
  );
};
