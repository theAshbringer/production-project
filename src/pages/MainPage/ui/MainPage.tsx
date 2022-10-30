import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  return (
    <div>
      {t('main.text')}
      <Input
        value={value}
        onChange={(val) => setValue(val)}
        placeholder="Введите текст"
      />
    </div>
  );
};

export default MainPage;
