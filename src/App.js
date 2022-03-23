import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import { links } from './components/header/links';
import Home from './pages/home';
import { ContextProvider } from './context/globalContext';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Header brand={'OpenWeather API - Client'} links={links} />
        <Routes>
          <Route index pathname='/' element={<Home />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
