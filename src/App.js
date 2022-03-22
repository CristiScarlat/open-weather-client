import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import { links } from './components/header/links';
import Home from './pages/home';

function App() {
  return (
    <div>
      <Router>
        <Header brand={'OpenWeather API - Client'} links={links} />
        <Routes>
          <Route index pathname='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
