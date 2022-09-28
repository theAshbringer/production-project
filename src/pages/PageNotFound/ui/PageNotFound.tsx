import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import './PageNotFound.scss';
import { Button, ThemeButton } from 'shared/ui/Button';

interface PageNotFoundProps {
 className?: string;
}
export const PageNotFound = ({ className }: PageNotFoundProps) => {
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
      <Button theme={ThemeButton.CLEAR} className="back">Вернуться назад</Button>
    </main>
  );
};
