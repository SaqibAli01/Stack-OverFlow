
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './pages/AppBar';
import Homes from './pages/Homes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    
    <BrowserRouter>
    <AppBar/>
      <Routes>
          <Route path="/" element={<Homes />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
