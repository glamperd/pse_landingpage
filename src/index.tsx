import 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage';
import TeamPage from './TeamPage';
import AboutPage from './AboutPage';
import { HashRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <HashRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="projects" element={<HomePage />} />
      <Route path="team" element={<TeamPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
