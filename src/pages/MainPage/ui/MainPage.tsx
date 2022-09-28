import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('main.text')}
      {' '}
      <BugButton />
    </div>
  );
};

export default MainPage;
