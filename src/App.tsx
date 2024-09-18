import { FC, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PMain from './pages/PMain';
import Header from './components/_Header/Header';
import Footer from './components/_Footer/Footer';
import PFeatured from './pages/PFeatured';
import PArt from './pages/PArt';
import ErrorPage from './pages/ErrorPage';
import ErrorBoundaryGlobal from './components/Errors/GlobalError';
import { useStore } from '@utils/useStore';
import { IRoute } from '@models/interfaces/IRoute';

const App: FC = () => {
  const startDispatch = useStore().FeaturedDispatch;
  useEffect(() => {
    startDispatch({ type: 'ADD_FEATURED_LOCAL', payload: [] });
  }, []);

  const routes: IRoute[] = [
    { path: '/', element: <PMain /> },
    { path: '/featured', element: <PFeatured /> },
    { path: '/:id', element: <PArt /> },
    { path: '/*', element: <ErrorPage /> },
  ];

  return (
    <ErrorBoundaryGlobal>
      <BrowserRouter basename="/art-museum">
        <Header />
        <Routes>
          {routes.map((e: IRoute) => (
            <Route path={e.path} element={e.element} key={e.path} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </ErrorBoundaryGlobal>
  );
};

export default App;
