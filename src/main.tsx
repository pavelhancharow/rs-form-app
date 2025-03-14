import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import Fallback from './components/Fallback/Fallback.tsx';
import { setupStore } from './store/store.ts';
import './index.css';
import GlobalStyle from './global';

const store = setupStore();

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <ErrorBoundary FallbackComponent={Fallback}>
          <GlobalStyle />
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
