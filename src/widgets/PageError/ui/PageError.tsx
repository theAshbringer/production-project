import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}
export const PageError = memo(({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p>{t('page-error.error-message')}</p>
      <Button
        onClick={reloadPage}
        theme={ButtonTheme.CLEAR}
      >
        {t('page-error.try-reload')}

      </Button>
    </div>
  );
});
