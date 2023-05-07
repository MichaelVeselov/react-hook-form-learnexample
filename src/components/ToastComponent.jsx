import { useNavigate } from 'react-router-dom';

import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export const ToastComponent = (props) => {
  const { showToast, setToast } = props;

  const navigate = useNavigate();

  const closeToast = () => {
    setToast(false);
    navigate('/');
  };

  return (
    <>
      <ToastContainer
        className='p-3'
        position='middle-center'
        style={{ zIndex: 1 }}
      >
        <Toast
          onClose={closeToast}
          show={showToast}
          bg='dark'
          autohide
          delay={10 * 1000}
        >
          <Toast.Header>
            <strong className='me-auto'>Форма карточки студента</strong>
            <small>только что</small>
          </Toast.Header>
          <Toast.Body className='text-white'>
            Форма сохранена успешно!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};
