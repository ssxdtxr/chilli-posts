import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Layout } from '@/components/layout/Layout';
import styles from './Login.module.scss';
import { ValidationError } from '@/components/UI/ValidationError/ValidationError';
import { userService } from '../../services/user.service';
import { useSnackbar } from 'notistack';
import Cookies from 'js-cookie';

export interface ILoginForm {
  email: string,
  password: string
};
export const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const { register, formState: { errors, isValid }, handleSubmit, reset, setError } = useForm<ILoginForm>({
    mode: 'onSubmit',
  });

  useEffect(() => {
    if (Cookies.get('jwt')) {
      router.push('/');
    }
  }, []);

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    if (!data.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
      return setError('email', { message: 'Неверный формат email адреса' });
    }
    try {
      const { data: loginData } = await userService.login(data);
      Cookies.set('jwt', loginData.token);
      reset();
      enqueueSnackbar('Вы успешно авторизовались', {
        variant: 'success',
      });
      router.push('/');
    } catch (error: any) {
      enqueueSnackbar('Пользователь с такими данными не найден', {
        variant: 'error',
      });
    }
  };
  return (
    <Layout title='Login'>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form} action=''>
        <label>
          <input
            placeholder='Email'
            type='text'
            {...register('email', {
              required: 'Email обязательный',
            })}
          />
          {errors.email && <ValidationError error={errors.email.message as string} />}
        </label>
        <label>
          <input
            placeholder='Password'
            type='password'
            {...register('password', {
              required: 'Пароль обязательный',
            })}
          />
          {errors.password && <ValidationError error={errors.password.message as string} />}
        </label>
        <button disabl  ed={!isValid}>Войти</button>
      </form>
    </Layout>
  );
};

