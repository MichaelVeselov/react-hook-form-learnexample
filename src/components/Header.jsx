import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header
        className='d-flex flex-wrap justify-content-center align-items-center py-3 ps-5 border-bottom'
        style={{ height: '75px' }}
      >
        <Link
          to='/'
          className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'
        >
          🧑‍🎓
          <span className='ms-2 fs-4'>Карточка студента</span>
        </Link>
      </header>
    </>
  );
};
