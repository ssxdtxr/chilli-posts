import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Layout } from '@/components/layout/Layout';
import styles from './Login.module.scss';

type Inputs = {
  email: string,
  password: string
};
export const Login = () => {
  const { register, formState: { errors, isValid }, handleSubmit, reset } = useForm<Inputs>({
    mode: 'onBlur'
  });

  const onSubmit:SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
    reset()
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
          <div>
            {errors.email && <div className={styles.error}>{errors.email.message || 'Email обязательный'}</div>}
          </div>
        </label>
        <label>
          <input
            placeholder='Password'
            type='password'
            {...register('password', {
              required: 'Пароль обязательный',
            })}
          />
          <div>
            {errors.password && <div className={styles.error}>{errors.password.message || 'Пароль обязательный'}</div>}
          </div>
        </label>
        <button disabled={!isValid}>Войти</button>
      </form>
    </Layout>
  );
};

