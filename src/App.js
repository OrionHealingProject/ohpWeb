import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound'
import ComingSoon from './Pages/ComingSoon'
import Home from './Pages/Home'
import Contact from './Pages/Contact'

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} /> */}

        <Route path="*" element={<ComingSoon />} />
      </Routes>

    </Router>

  );
}

export default App;
