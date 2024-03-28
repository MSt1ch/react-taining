import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/counter';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <div>
      {t('main:main')}
      <Counter />
    </div>
  );
};

export default MainPage;
