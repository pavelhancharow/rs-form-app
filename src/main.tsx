import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import { createGlobalStyle } from 'styled-components';
import App from './App.tsx';
import { ErrorBoundary, Fallback } from './components';
import { setupStore } from './store/store.ts';
import './index.css';

const store = setupStore();
const GlobalStyle = createGlobalStyle``;

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
