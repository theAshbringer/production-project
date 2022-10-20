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

  const onToggleModal = useCallback(() => {
    setIsLoginOpen((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        onClick={onToggleModal}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        className={cls.links}
      >
        {t('login')}
      </Button>
      <Modal
        onClose={onToggleModal}
        isOpen={isLoginOpen}
        // eslint-disable-next-line i18next/no-literal-string
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis vel iste, eaque omnis aliquam minima voluptas velit accusantium repudiandae sit perferendis quis consectetur. Nihil pariatur distinctio nemo alias vitae qui!
      </Modal>
    </div>
  );
};
