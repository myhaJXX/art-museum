import React, { FC, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PMain from './pages/PMain';
import Header from './components/_Header/Header';
import Footer from './components/_Footer/Footer';
import PFeatured from './pages/PFeatured';
import PArt from './pages/PArt';
import { useStore } from '@utils/useStore';
import ErrorPage from './pages/ErrorPage';

const App: FC = () => {
  const startDispatch = useStore().FeaturedDispatch;
  useEffect(() => {
    startDispatch({ type: 'ADD_FEATURED_LOCAL', payload: [] });
  }, []);
  return (
    <BrowserRouter basename="/art-museum">
      <Header />
      <Routes>
        <Route path="/" element={<PMain />} />
        <Route path="/featured" element={<PFeatured />} />
        <Route path="/:id" element={<PArt />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
