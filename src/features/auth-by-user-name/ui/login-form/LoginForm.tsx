import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/button';
import Input from 'shared/ui/input';
import css from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}
export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation('common');
  return (
    <div className={classNames(css.loginForm, {}, [className])}>
      <Input
        autofocus
        className={css.input}
        type='text'
        placeholder={t('common:login')}
      />
      <Input
        className={css.input}
        type='text'
        placeholder={t('common:password')}
      />
      <Button className={css.loginBtn}>
        {t('logIn')}
      </Button>
    </div>
  );
};
