import { useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Recommended from './components/recommended/Recommended';
import RequiredAuth from './components/RequiredAuth';
import Review from './components/review/Review';
import StreamMovie from './components/stream/StreamMovie';
import './App.css';

function App() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleLogout = () => {
    setAuth(null);
    navigate('/login');
  };

  const updateMovieReview = (imdb_id) => {
    navigate(`/review/${imdb_id}`);
  };

  return (
    <>
      <Header handleLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<Home updateMovieReview={updateMovieReview} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<RequiredAuth />}>
          <Route path="/recommended" element={<Recommended />} />
          <Route path="/review/:imdb_id" element={<Review />} />
        </Route>
        <Route path="/stream/:yt_id" element={<StreamMovie />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
