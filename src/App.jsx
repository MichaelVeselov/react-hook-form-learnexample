import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { useLocalStorage } from './hooks/useLocalSorage';

import { Layout } from './components/Layout';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';
import { FormPage } from './pages/FormPage';
import { NotFoundPage } from './pages/NotFoundPage';

import './styles/App.css';

function App() {
  const [studentData, setStudentData] = useLocalStorage('studentCard', {
    firstName: '',
    lastName: '',
    birthYear: null,
    portfolio: '',
  });

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage studentData={studentData} />,
        },
        {
          path: '/form',
          element: (
            <FormPage
              studentData={studentData}
              setStudentData={setStudentData}
            />
          ),
        },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
