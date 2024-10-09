import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home'; // Import the Home component
import Layout from '../containers/Layout'; // Import the Layout component
import { BrowserRouter as Router } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
