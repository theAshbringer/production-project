import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}
export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input
        type="text"
        className={cls.input}
        placeholder={t('auth.enter-username')}
        autoFocus
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t('auth.enter-password')}
      />
      <Button className={cls.loginBtn}>
        {t('login')}
      </Button>
    </div>
  );
};
