import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { ToastComponent } from '../components/ToastComponent';

export const StudentForm = (props) => {
  const { firstName, lastName, birthYear, portfolio, setStudentData } = props;

  const isCompleteData = firstName && lastName && birthYear && portfolio;

  const [showToast, setToast] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isValid, isDirty, isSubmitted },
  } = useForm({
    defaultValues: {
      firstName: firstName,
      lastName: lastName,
      birthYear: birthYear,
      portfolio: portfolio,
    },
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    setToast(true);
    setStudentData(data);
  };

  const currentYear = new Date().getFullYear();

  const regExpUrl =
    /^(https?:\/\/.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;

  const blockInvalidChar = (e) =>
    ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

  useEffect(() => {
    setFocus('firstName');
  }, [setFocus]);

  const submitButtonText = isCompleteData ? 'Обновить' : 'Создать';

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: '550px' }}
        noValidate
      >
        <div className='mb-3'>
          <label htmlFor='firstName' className='form-label'>
            Имя:
          </label>
          <input
            type='text'
            className={
              errors?.firstName ? 'form-control is-invalid' : 'form-control'
            }
            id='firstName'
            {...register('firstName', {
              required: 'Поле имя обязательно к заполнению!',
              minLength: {
                value: 2,
                message: 'Имя не может быть короче 2-х знаков!',
              },
            })}
          />
          {errors.firstName ? (
            <div className='invalid-feedback'>{errors?.firstName?.message}</div>
          ) : (
            <div className='form-text'>
              Поле имя обязательно к заполнению и не может быть короче двух
              знаков.
            </div>
          )}
        </div>

        <div className='mb-3'>
          <label htmlFor='lastName' className='form-label'>
            Фамилия:
          </label>
          <input
            type='text'
            className={
              errors?.lastName ? 'form-control is-invalid' : 'form-control'
            }
            id='lastName'
            {...register('lastName', {
              required: 'Поле фамилия обязательно к заполнению!',
              minLength: {
                value: 2,
                message: 'Фамилия не может быть короче 2-х знаков!',
              },
            })}
          />
          {errors.lastName ? (
            <div className='invalid-feedback'>{errors?.lastName?.message}</div>
          ) : (
            <div className='form-text'>
              Поле фамилия обязательно к заполнению и не может быть короче двух
              знаков.
            </div>
          )}
        </div>

        <div className='mb-3'>
          <label htmlFor='birthYear' className='form-label'>
            Год рождения:
          </label>
          <input
            type='number'
            onKeyDown={blockInvalidChar}
            className={
              errors?.birthYear ? 'form-control is-invalid' : 'form-control'
            }
            id='birthYear'
            {...register('birthYear', {
              required: 'Поле год рождения обязательно к заполнению!',
              valueAsNumber: 'Введенный год рождения должен быть числом.',
              min: {
                value: 1901,
                message: 'Год рождения не может быть меньше 1901.',
              },
              max: {
                value: currentYear,
                message: `Год рождения не может быть больше ${currentYear}.`,
              },
            })}
          />
          {errors.birthYear ? (
            <div className='invalid-feedback'>{errors?.birthYear?.message}</div>
          ) : (
            <div className='form-text'>
              {`Год рождения обязателен к заполнению и не может быть меньше 1901 и больше ${currentYear}.`}
            </div>
          )}
        </div>

        <div className='mb-3'>
          <label htmlFor='portfolio' className='form-label'>
            Портфолио:
          </label>
          <input
            type='text'
            className={
              errors?.portfolio ? 'form-control is-invalid' : 'form-control'
            }
            id='portfolio'
            {...register('portfolio', {
              required: 'Поле портфолио обязательно к заполнению!',
              pattern: {
                value: regExpUrl,
                message: 'Введенная Вами ссылка не валидна!',
              },
            })}
          />
          {errors.portfolio ? (
            <div className='invalid-feedback'>{errors?.portfolio?.message}</div>
          ) : (
            <div className='form-text'>
              Поле портфолио обязательно к заполнению и должно содержать
              валидную ссылку.
            </div>
          )}
        </div>
        <div>
          {!isSubmitted && isCompleteData && (
            <button
              type='button'
              className='btn btn-dark w-20 me-2'
              onClick={() => navigate(-1)}
            >
              Назад
            </button>
          )}
          <button
            type='submit'
            className='btn btn-primary w-25'
            disabled={!isValid || !isDirty || isSubmitted}
          >
            {submitButtonText}
          </button>
        </div>
      </form>
      {isSubmitted && (
        <ToastComponent showToast={showToast} setToast={setToast} />
      )}
    </>
  );
};
