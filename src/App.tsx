import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/home/Footer';
import Homepage from './components/home/Homepage';
import Blogs from './components/blogs/Blogs';
import Auth from './components/auth/Auth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authActions } from './store/auth-slice';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    const userData: string = localStorage.getItem('user') as string;

    if(JSON.parse(userData) !== null){
      dispatch(authActions.login());
    }
  })
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
