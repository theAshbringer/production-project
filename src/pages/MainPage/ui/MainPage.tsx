import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('main.text')} </div>
  )
}

export default MainPage