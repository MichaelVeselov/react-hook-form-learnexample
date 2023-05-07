import { Link } from 'react-router-dom';

import { ageFormatter } from '../utils/ageFormatter';

export const StudentCard = (props) => {
  const { firstName, lastName, birthYear, portfolio } = props;

  const isCompleteData = firstName && lastName && birthYear && portfolio;

  const submitButtonText = isCompleteData ? 'Редактировать' : 'Добавить';
  const currentAge = ageFormatter(new Date().getFullYear() - birthYear);

  return (
    <div className='card' style={{ maxWidth: '550px' }}>
      <h4 className='card-header'>Карточка студента</h4>
      <div className='card-body'>
        <div className='container fs-5 mb-4'>
          {isCompleteData ? (
            <>
              <div className='row align-items-center mb-2'>
                <div className='col-4 fw-bolder'>Имя:</div>
                <div className='col-8'>{firstName}</div>
              </div>
              <div className='row align-items-center mb-2'>
                <div className='col-4 fw-bolder'>Фамилия:</div>
                <div className='col-8'>{lastName}</div>
              </div>
              <div className='row align-items-center mb-2'>
                <div className='col-4 fw-bolder'>Год рождения:</div>
                <div className='col-8'>
                  {birthYear} ({currentAge})
                </div>
              </div>
              <div className='row align-items-center'>
                <div className='col-4 fw-bolder'>Портфолио:</div>
                <div className='col-8'>{portfolio}</div>
              </div>
            </>
          ) : (
            'Нет данных'
          )}
        </div>
        <Link to='/form' className='btn btn-primary w-50'>
          {submitButtonText}
        </Link>
      </div>
    </div>
  );
};
