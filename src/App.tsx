import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { CategoryPage } from './pages/CategoryPage';
import { FreeBooks } from './pages/FreeBooks';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="category/:categoryId" element={<CategoryPage />} />
          <Route path="free-books" element={<FreeBooks />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
