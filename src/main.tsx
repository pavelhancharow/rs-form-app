import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import Fallback from './components/Fallback/Fallback.tsx';
import './index.css';
import GlobalStyle from './global';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <ErrorBoundary FallbackComponent={Fallback}>
        <GlobalStyle />
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
