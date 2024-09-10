import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PMain from './pages/PMain';
import Header from './components/_Header/Header';
import Footer from './components/_Footer/Footer';
import PFeatured from './pages/PFeatured';
import PArt from './pages/PArt';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PMain />} />
        <Route path="/featured" element={<PFeatured />} />
        <Route path='/:id' element={<PArt/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
