
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './views/Home';
import { Concierge } from './views/Concierge';
import { Contact } from './views/Contact';
import { Discover } from './views/Discover';
import { CourseBuilder } from './views/CourseBuilder';
import { Tutor } from './views/Tutor';
import { Identity } from './views/Identity';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/identity" element={<Identity />} />
          <Route path="/academy" element={<CourseBuilder />} />
          <Route path="/mentor" element={<Tutor />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/concierge" element={<Concierge />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
