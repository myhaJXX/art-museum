import React, { FC, useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PMain from './pages/PMain';
import Header from './components/_Header/Header';
import Footer from './components/_Footer/Footer';
import PFeatured from './pages/PFeatured';
import PArt from './pages/PArt';
import Store from './store/store';

const App: FC = () => {
  const startDispatch = useContext(Store)?.FeaturedDispatch
  if(!startDispatch) return <></>
  useEffect(()=>{
    startDispatch({type: 'ADD_FEATURED_LOCAL', payload: []})
  }, [])
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
