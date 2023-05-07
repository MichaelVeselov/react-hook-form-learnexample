import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-primary text-white py-5'>
      <h2 className='fw-bold' style={{ fontSize: '84px' }}>
        404
      </h2>
      <p className='fw-bold text-center mb-5' style={{ fontSize: '84px' }}>
        Страница не существует!
      </p>
      <Link
        to='/'
        className='btn btn-primary w-25'
        role='button'
        style={{ fontSize: '44px' }}
      >
        --&gt; Home
      </Link>
    </div>
  );
};
