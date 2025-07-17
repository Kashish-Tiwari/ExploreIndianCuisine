import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DishDetails from './pages/DishDetails';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dish/:name" element={<DishDetails />} />
      </Routes>
    </div>
  );
}
