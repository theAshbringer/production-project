import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface ProfilePageProps {
  className?: string;
}
const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile');
  return (
    <div className={classNames('', {}, [className])}>
      {t('profile-page')}
    </div>
  );
};

export default ProfilePage;
