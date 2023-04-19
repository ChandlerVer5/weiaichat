import { HashRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './ThemeProvider';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function RouteApp() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <HashRouter>
      <RouteApp />
    </HashRouter>
  );
}
