import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}
export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <input type="text" className={cls.input} />
      <input type="text" />
      <Button className={cls.loginBtn}>
        {t('login')}
      </Button>
    </div>
  );
};
