import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/home/Footer';
import Homepage from './components/home/Homepage';
import Blogs from './components/blogs/Blogs';
import Auth from './components/auth/Auth';

function App() {
  return (
    <div>
      <header><Header /></header>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
