import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  return (
    <>
      <Header />
      <main className='container px-3 py-5 content'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
