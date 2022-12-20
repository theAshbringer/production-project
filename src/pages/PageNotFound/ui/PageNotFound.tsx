/* eslint-disable i18next/no-literal-string */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import './PageNotFound.scss';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { memo } from 'react';

export const PageNotFound = memo(() => {
  const { t } = useTranslation();
  return (
    <main>
      <h1>
        4
        <span><FontAwesomeIcon icon={faGhost} /></span>
        4
      </h1>
      <h2>{t('page-not-found.error')}</h2>
      <p>{t('page-not-found.sorry')}</p>
      <Button theme={ButtonTheme.CLEAR} className="back">{t('page-not-found.go-back')}</Button>
    </main>
  );
});
